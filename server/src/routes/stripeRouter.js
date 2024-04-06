require("dotenv").config();

const express = require("express");
const router = express.Router();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

//* STRIPE CHECKOUT SESSION
router.post("/create-checkout-session", async (req, res) => {
	const products = req.body.cartItems.map((item) => {
		return {
			productId: item._id,
			productColor: item.color,
			quantity: item.cartQuantity
		};
	});

	const customer = await stripe.customers.create({
		metadata: {
			userId: req.body.userId,
			cart: JSON.stringify(products)
		}
	});

	const line_items = req.body.cartItems.map((item) => {
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
			quantity: item.cartQuantity
		};
	});

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		shipping_address_collection: {
			allowed_countries: ["US", "CA", "EC", "BR", "CL"]
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
		cancel_url: `${process.env.FRONT_URL}/cart`
	});

	res.send({ url: session.url });
});

//* ------------------ CREANDO REGISTRO DE COMPRA (función) ---------------------
const Compra = require("../models/Compras.js");

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
		console.log("Compra procesada:", savedOrder);
		//todo: aquí deberiamos enviar un email al usuario sobre la compra exitosa del producto
	} catch (error) {
		console.log(error);
	}
};

//* STRIPE WEEBHOOK
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
				.then((customer) => {
					createOrder(customer, data); //se crea y se guarda el registro de compra en la BD
				})
				.catch((err) => console.log(err.message));
		}

		// Return a 200 response to acknowledge receipt of the event
		res.send().end();
	}
);

module.exports = router;