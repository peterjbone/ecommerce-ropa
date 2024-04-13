require("dotenv").config();

const express = require("express");
const router = express.Router();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

//*-------------------------- STRIPE CHECKOUT SESSION --------------------------------
router.post("/create-checkout-session", async (req, res) => {
	// Guardando solo el id, color y cantidad de los productos
	const products = req.body.formatCart.map((item) => {
		return {
			productId: item.id,
			color: item.color,
			quantity: item.quantity
		};
	});

	const customer = await stripe.customers.create({
		metadata: {
			userId: req.body.userId,
			cart: JSON.stringify(products)
		}
	});

	const line_items = req.body.formatCart.map((item) => {
		return {
			price_data: {
				currency: "usd",
				product_data: {
					name: item.nombre,
					images: [item.imagen],
					description: item.descripcion,
					metadata: {
						id: item._id
					}
				},
				unit_amount: Math.round(item.precio * 100)
			},
			quantity: item.quantity
		};
	});

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		shipping_address_collection: {
			allowed_countries: ["US", "CA", "EC", "BR", "CL", "AR"]
		},
		shipping_options: [
			{
				shipping_rate_data: {
					type: "fixed_amount",
					fixed_amount: {
						amount: 0,
						currency: "usd"
					},
					display_name: "Free shipping",
					delivery_estimate: {
						minimum: {
							unit: "business_day",
							value: 5
						},
						maximum: {
							unit: "business_day",
							value: 7
						}
					}
				}
			},
			{
				shipping_rate_data: {
					type: "fixed_amount",
					fixed_amount: {
						amount: 1500,
						currency: "usd"
					},
					display_name: "Next day air",
					delivery_estimate: {
						minimum: {
							unit: "business_day",
							value: 1
						},
						maximum: {
							unit: "business_day",
							value: 1
						}
					}
				}
			}
		],
		phone_number_collection: {
			enabled: true
		},
		customer: customer.id,
		line_items,
		mode: "payment",
		success_url: `${process.env.FRONT_URL}/checkout-success`,
		cancel_url: `${process.env.FRONT_URL}/carrito`
	});

	res.send({ url: session.url });
});

//* ------------------ CREANDO REGISTRO DE COMPRA (función) ---------------------
const Compra = require("../models/Compra.js");

const createOrder = async (customer, data) => {
	const products = JSON.parse(customer.metadata.cart);

	//? Nueva orden de compra en la BD
	const newOrder = new Compra({
		userId: customer.metadata.userId,
		customerId: data.customer,
		paymentIntentId: data.payment_intent,
		products,
		subtotal: data.amount_subtotal,
		total: data.amount_total,
		shipping: data.customer_details,
		payment_status: data.payment_status
	});

	try {
		const savedOrder = await newOrder.save();

		return savedOrder._id;
	} catch (error) {
		console.log("Error al crear el registro de compra", error);
	}
};

//* ------------------ ENVIAR EMAIL DE COMPRA EXITOSA (funciones) ---------------------
const nodemailer = require("nodemailer");

async function settingEmail(customer, data, orderId) {
	//? ESTO SE RETORNAR
	const transporter = nodemailer.createTransport({
		service: "gmail",
		host: "smtp.gmail.com",
		port: 587,
		secure: false, // Use `true` for port 465, `false` for all other ports
		auth: {
			user: process.env.USER_EMAIL, // correo del emisor
			pass: process.env.APP_PASSWORD // Contraseña de la cuenta de Gmail
		}
	});

	//? Creando un <div> para cada producto
	const purchaseRecord = await Compra.findById(orderId).populate(
		"products.productId"
	);
	let listingProducts = [];
	purchaseRecord.products.forEach((item) => {
		const newProduct = `
    <div
          style="display: flex; justify-content: center; gap: 1rem; margin: 0 auto; padding: 16px;
          width: 100%; height: 500px; background-color: #fcc; color: #000">
        <div>
          <img src=${item.productId.opciones[0].imagenes[0]} alt="producto" 
          width="300" height="300"/>
        </div>
        <div 
        style="display: flex; flex-direction: column; justify-content: center; align-items: center">
          <h3>Nombre</h3>
          <p> ${item.productId.nombre} </p>
        </div>
        <div
        style="display: flex; flex-direction: column; justify-content: center; align-items: center"
        >
          <h3>Precio</h3>
          <p> ${item.productId.precio} </p>
        </div>
        <div
        style="display: flex; flex-direction: column; justify-content: center; align-items: center">
          <h3>Cantidad</h3>
          <p> ${item.quantity} </p>
        </div>
        <div
        style="display: flex; flex-direction: column; justify-content: center; align-items: center">
          <h3>Total</h3>
          <p> ${item.quantity * item.productId.precio} </p>
        </div>
    </div>
    `;

		listingProducts.push(newProduct);
	});

	//? ESTO SE RETORNAR
	const mailOptions = {
		from: {
			name: "Ecommerce ropa",
			address: process.env.USER_EMAIL
		}, // sender address
		to: customer.email, // list of receivers
		subject: "Compra realizada con éxito 😎", // Subject line
		// html body
		html: `
      <h1>Gracias por su compra 🤝</h1>    
      <h2>Este es un resumen de la compra que hiciste 🙂</h2>
      <div
      style="border: 3px solid #000;
      width: 100%; height: 100vh">
        ${listingProducts.join(" ")}
      </div>
      <div style="background-color: #ccc; color: #000">
        <h3>Subtotal:</h3>
        <span>$${purchaseRecord.subtotal} </span>
        <h3>Valor de envío:</h3>
        <span>$${purchaseRecord.total - purchaseRecord.total} </span>
        <h3>Total:</h3>
        <span>$${purchaseRecord.total} </span>
      </div>
    `
	};

	return { transporter, mailOptions };
}

const sendMail = async (transporter, mailOptions) => {
	try {
		await transporter.sendMail(mailOptions);
		console.log("Email has been sent! ");
	} catch (error) {
		console.log("Error sending email", error);
	}
};

//sendMail(transporter, mailOptions);

//*------------------------------- STRIPE WEEBHOOK -------------------------------------
let endpointSecret;

router.post(
	"/webhook",
	express.raw({ type: "application/json" }),
	(req, res) => {
		const sig = req.headers["stripe-signature"];

		let data;
		let eventType;

		if (endpointSecret) {
			let event;

			try {
				event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
				console.log("Webhook verified");
			} catch (err) {
				console.log(`Webhook error: ${err.message}`);
				response.status(400).send(`Webhook Error: ${err.message}`);
				return;
			}

			data = event.data.object;
			eventType = event.type;
		} else {
			data = req.body.data.object;
			eventType = req.body.type;
		}

		// Handle the event
		if (eventType === "checkout.session.completed") {
			stripe.customers
				.retrieve(data.customer)
				.then(async (customer) => {
					console.log("DATA", data);
					console.log("COSTUMER", customer);

					const id = await createOrder(customer, data); //se crea y se guarda el registro de compra en la BD
					const { transporter, mailOptions } = await settingEmail(
						customer,
						data,
						id
					); //configurando el envio a email
					await sendMail(transporter, mailOptions); //enviar email al usuario
				})
				.catch((err) => console.log(err.message));
		}

		// Return a 200 response to acknowledge receipt of the event
		res.send().end();
	}
);

module.exports = router;
