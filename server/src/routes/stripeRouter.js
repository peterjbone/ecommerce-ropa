require("dotenv").config();

const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto.js");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

//*-------------------------- STRIPE CHECKOUT SESSION --------------------------------
router.post("/create-checkout-session", async (req, res) => {
  const products = req.body.formatCart.map((item) => {
    return {
      productId: item._id,
      idProductOriginal: item.idProductOriginal,
      productColor: item.color,
      quantity: item.quantity,
      productSize: item.talla,
    };
  });

  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(products),
    },
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
            id: item._id,
          },
        },
        unit_amount: Math.round(item.precio * 100),
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: [
        "AF",
        "AL",
        "DZ",
        "AD",
        "AR",
        "AM",
        "AU",
        "AT",
        "BS",
        "BH",
        "BD",
        "BB",
        "BY",
        "BE",
        "BO",
        "BR",
        "CA",
        "CL",
        "CN",
        "CO",
        "DK",
        "DO",
        "EC",
        "EG",
        "SV",
        "FK",
        "FO",
        "FI",
        "FR",
        "DE",
        "GR",
        "US",
      ]
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd"
          },
          display_name: "Envío gratis",
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
          display_name: "Siguiente día",
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
    cancel_url: `${process.env.FRONT_URL}/carrito`,
    locale: "es"
  });

  res.send({ url: session.url });
});

//* ------------------ CREANDO REGISTRO DE COMPRA (función) ---------------------
const Compra = require("../models/Compra.js");

const createOrder = async (customer, data) => {
  const products = JSON.parse(customer.metadata.cart);

  for (const product of products) {
    const productIdOriginal = product.idProductOriginal;

    const selectedColor = product.productColor;
    const quantity = product.quantity;

    const dbProduct = await Producto.findById(productIdOriginal);

    if (!dbProduct) {
      throw new Error("Producto no encontrado");
    }

    const selectedOptionIndex = dbProduct.opciones.findIndex((option) =>
      option.colores.nombres.includes(selectedColor)
    );
    if (selectedOptionIndex === -1) {
      throw new Error("Opción de color no encontrada para el producto");
    }

    const selectedSize = product.productSize;

    const selectedSizeIndex = dbProduct.opciones[
      selectedOptionIndex
    ].tallas.findIndex((size) => size.talla === selectedSize);

    if (selectedSizeIndex === -1) {
      throw new Error("Talla seleccionada no encontrada en las opciones");
    }

    dbProduct.opciones[selectedOptionIndex].tallas[selectedSizeIndex].stock -=
      quantity;

    dbProduct.markModified("opciones");
    await dbProduct.save();
  }

  // Crear y guardar la orden de compra en la BD
  const newOrder = new Compra({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products,
    subtotal: data.amount_subtotal,
    amount_shipping: data.total_details.amount_shipping,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
    purchase_time: new Date().toLocaleString()
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

function fechaDeEntrega(dias) {
  const fechaActual = new Date();

  // sumamos los dias
  fechaActual.setDate(fechaActual.getDate() + dias);

  // Convertimos la fecha a un formato legible
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const fechaFormateada = fechaActual.toLocaleDateString("es-ES", options);

  return fechaFormateada;
}

async function settingEmail(customer, data, orderId) {
  //! ESTO SE RETORNAR
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

  //? Obteniendo el registro de compra (con usuario y productos)
  const purchaseRecord = await Compra.findById(orderId)
    .populate("products.productId")
    .populate("userId");

  //? Creando un <div> para cada producto
  let listingProducts = [];
  purchaseRecord.products.forEach((item) => {
    const newProduct = `
        <div style="width: 100%; position: relative">
					<div
						style="
							box-sizing: border-box;
							display: inline-block;
							width: 32.5%;
							padding: 10px;
						">
						<img
							src="${item.productId.opciones[0].imagenes[0]}"
							alt="producto"
							width="120px"
							height="150px" />
					</div>
					<div
						style="
							box-sizing: border-box;
							display: inline-block;
							width: 32.5%;
							padding: 10px;
						">
						<h4 style="margin: 0 0 12px 0; font-size: 16px">
							${item.productId.nombre.toUpperCase()}
						</h4>
						<p style="margin: 0 0 8px 0; font-size: 16px">Talla: ${item.talla} </p>
						<p style="margin: 0 0 8px 0; font-size: 16px">Color: ${item.color} </p>
						<p style="margin: 0 0 8px 0; font-size: 16px">Cantidad: ${item.quantity} </p>
						<p style="margin: 0 0 8px 0; font-size: 16px">Precio (c/u): $${item.productId.precio
      } </p>
					</div>
					<div
						style="
							box-sizing: border-box;
							display: inline-block;
							width: 32.5%;
							padding: 10px;
							position: relative;
							top: -140px;
						">
						<p style="margin: 0; font-size: 16px">Precio: $${item.productId.precio * item.quantity
      }</p>
					</div>
				</div>
    `;

    listingProducts.push(newProduct);
  });

  //! ESTO SE RETORNAR
  const mailOptions = {
    from: {
      name: "Ecommerce ropa",
      address: process.env.USER_EMAIL
    }, // sender address
    to: customer.email, // list of receivers
    subject: "Compra realizada con éxito 😎", // Subject line
    // html body
    html: `
      <h1 style="text-align: center">Gracias por su compra 🤝</h1>    
      <h2 style="text-align: center">Este es un resumen de la compra que hiciste 🙂</h2>
      	<!-- Container principal -->
		<div
			style="
				box-sizing: border-box;
				width: 60%;
				min-width: 400px;
				max-width: 500px;
				margin: 0 auto;
				border: 3px solid #ccc;
				font-family: sans-serif;
				text-align: center;
			">
			<!-- Numero de pedido -->
			<div
				style="
					box-sizing: border-box;
					width: 100%;
					padding: 1.5rem;
					background-color: #e1fbff;
					color: #000;
				">
				<h1 style="font-size: 1.5rem; margin: 0 0 1rem 0">Número de pedido</h1>
				<img
					src="https://i.postimg.cc/Y9rP2bZT/outline-verified-black-48dp.png"
					alt="check" />
				<p style="font-size: 1.3rem; color: #888; margin: 0 0 0.8rem 0">
					Gracias por tu compra
				</p>
				<div
					style="
						width: 80%;
						margin: 0 auto;
						padding: 8px;
						border-radius: 20px;
						font-size: 1.2rem;
						font-weight: 400;
						color: #fff;
						background-color: #32aafa;
					">
					Número de pedido: <span style="font-weight: 600">${purchaseRecord._id} </span>
				</div>
			</div>
			<!-- RESUMEN DE COMPRA -->
			<div style="color: #000; background-color: #fff; text-align: center">
				<h3 style="font-size: 20px">Resumen de compra</h3>
				<!-- 3 titulos -->
				<div style="width: 100%; background-color: #ddd">
					<div
						style="
							box-sizing: border-box;
							display: inline-block;
							width: 32.5%;
							padding: 10px;
							font-weight: 600;
							font-size: 16px;
							background-color: #ddd;
						">
						Item
					</div>
					<div
						style="
							box-sizing: border-box;
							display: inline-block;
							width: 32%;
							padding: 10px;
							border-left: 2px solid #fff;
							border-right: 2px solid #fff;
							font-weight: 600;
							font-size: 16px;
							background-color: #ddd;
						">
						Información
					</div>
					<div
						style="
							box-sizing: border-box;
							display: inline-block;
							width: 32.5%;
							padding: 10px;
							font-weight: 600;
							font-size: 16px;
							background-color: #ddd;
						">
						Precio
					</div>
				</div>
				<!-- informacion del producto (INDIVIDUALMENTE) -->
          ${listingProducts.join(" ")}
				<!-- RESUMEN DE PAGO  -->
				<div style="padding: 0 18px; color: #000; background-color: #fff">
					<h3 style="margin: 1rem 0 0.8rem 0; text-align: center; font-size: 20px">
						Resumen de Pago
					</h3>
					<hr style="border: 1px solid #ccc" />
					<div style="width: 100%">
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-weight: 600;
								font-size: 16px;
								text-align: left;
							">
							Subtotal
						</p>
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-size: 16px;
								text-align: right;
							">
							$${data.amount_subtotal / 100}
						</p>
					</div>
					<div style="width: 100%">
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-weight: 600;
								font-size: 16px;
								text-align: left;
							">
							Descuento
						</p>
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-size: 16px;
								text-align: right;
							">
							$0
						</p>
					</div>
					<div style="width: 100%">
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-weight: 600;
								font-size: 16px;
								text-align: left;
							">
							Envío
						</p>
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-size: 16px;
								text-align: right;
							">
							${data.total_details.amount_shipping
        ? `$${data.total_details.amount_shipping / 100}`
        : "Gratis"
      }
						</p>
					</div> 
					<div style="width: 100%">
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-weight: 600;
								font-size: 16px;
								text-align: left;
							">
							Impuesto
						</p>
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-size: 16px;
								text-align: right;
							">
							$0
						</p>
					</div>
					<hr style="border: 1px solid #ccc" />
					<div style="width: 100%">
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-weight: 600;
								font-size: 16px;
								text-align: left;
							">
							Total
						</p>
						<p
							style="
								display: inline-block;
								width: 49%;
								margin: 0 0 8px 0;
								font-size: 16px;
								text-align: right;
							">
							$${data.amount_total / 100}
						</p>
					</div>
				</div>
				<!-- METODO DE PAGO -->
				<!-- <div style="padding: 0 18px; color: #000; background-color: #fff">
					<h3 style="margin: 24px 0 14px">Método de Pago</h3>
					<hr style="border: 1px solid #ccc" />
					<h4 style="margin: 0.5rem 0; text-align: start; font-size: 16px">
						Tipo de pago
					</h4>
					<div style="width: 50%; text-align: left; position: relative">
						<img
							src="https://i.postimg.cc/mkdZXw67/card-icon.png"
							alt="tarjeta"
							width="35"
							height="35" />
						<p
							style="
								width: fit-content;
								height: auto;
								font-size: 16px;
								display: inline-block;
								position: relative;
								top: -10px;
							">
							MasterCard
						</p>
					</div>
				</div> -->
				<!-- TUS DETALLES -->
				<div style="padding: 0 18px; color: #000; background-color: #fff">
					<h3 style="margin: 1.6rem 0 1rem; font-size: 20px">Tus Detalles</h3>
					<hr style="border: 1px solid #ccc" />
					<!-- primero fila -->
					<div style="width: 100%; margin-bottom: 1rem">
						<div style="display: inline-block; width: 49%">
							<p style="color: #888; margin: 0 0 10px; font-size: 16px; font-weight: 700">
								Nombre
							</p>
							<p style="margin: 0 0 10px; font-size: 16px">${data.customer_details.name} </p>
						</div>
						<div style="display: inline-block; width: 49%">
							<p style="color: #888; margin: 0 0 10px; font-size: 16px; font-weight: 700">
								Email
							</p>
							<p style="margin: 0 0 10px; font-size: 16px">${customer.email} </p>
						</div>
					</div>
					<!-- segunda fila -->
					<div style="width: 100%; margin-bottom: 1rem">
						<div style="display: inline-block; width: 49%">
							<p style="color: #888; margin: 0 0 10px; font-size: 16px; font-weight: 700">
								Teléfono
							</p>
							<p style="margin: 0 0 10px; font-size: 16px">${customer.phone} </p>
						</div>
						<div style="display: inline-block; width: 49%">
							<p style="color: #888; margin: 0 0 10px; font-size: 16px; font-weight: 700">
								Número de pedido
							</p>
							<p style="margin: 0 0 10px; font-size: 16px">${purchaseRecord._id} </p>
						</div>
					</div>
					<!-- tercera fila -->
					<div style="width: 100%; margin-bottom: 1rem">
						<div style="display: inline-block; width: 49%">
							<p style="color: #888; margin: 0 0 10px; font-size: 16px; font-weight: 700">
								Dirección de envío
							</p>
							<p style="margin: 0 0 10px; font-size: 16px">
                ${data.customer_details.address.line1} <br>
                ${data.customer_details.address.line2} <br>
                Código postal ${data.customer_details.address.postal_code}<br>
                ${data.customer_details.address.city}, ${data.customer_details.address.country
      }
              </p>
						</div>
						<div style="display: inline-block; width: 49%">
							<p style="color: #888; margin: 0 0 10px; font-size: 16px; font-weight: 700">
								Fecha de pedido
							</p>
							<p style="margin: 0 0 10px; font-size: 16px">${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()} </p>
						</div>
					</div>
					<!-- cuarta fila -->
					<div style="width: 100%; margin-bottom: 16px">
						<div>
							<p style="color: #888; margin: 0 0 10px; font-size: 16px; font-weight: 700">
								Tipo / Método de envío
							</p>
							<p style="margin: 0 0 10px; font-size: 16px">
                ${data.total_details.amount_shipping === 0
        ? "Envío Gratis <br> (de 5 a 7 días hábiles)"
        : "Al siguiente día <br> (solo 1 día hábil)"
      }
							</p>
						</div>
					</div>
				</div>
				<br />
				<h2 style="margin: 0 0 10px; font-size: 19px; color: green">
					Fecha estimada de entrega:
				</h2>
				<p style="margin: 0; font-size: 18px">
                ${data.total_details.amount_shipping === 0
        ? fechaDeEntrega(5)
        : fechaDeEntrega(1)
      }
        </p>
				<br />
				<!-- SOPORTE DE ATENCION AL CLIENTE -->
				<div style="padding: 0 18px; color: #000; background-color: #fff">
					<h3 style="margin: 1.2rem 0 12px; font-size: 20px">Soporte de atención al cliente</h3>
					<div
						style="
							width: 80%;
							padding: 10px;
							margin: 0 auto 16px;
							background-color: #e1fbff;
						">
						<p style="margin: 0 0 10px; font-weight: 700; font-size: 16px">
							Alguna pregunta?
						</p>
						<p style="margin: 0 0 10px; font-size: 16px">
							Si necesita ayuda puede escribirnos por nuestro correo electrónico
							o por Whatsapp
						</p>
						<div style="width: 100%; text-align: center">
              <a href="https://api.whatsapp.com/send?phone=+593964061622&text=Hola%20Ecommerce%20Ropa%20tengo%20una%20consulta%20y%20necesito%20asistencia%20😊">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png"
                  alt="whatsapp"
                  width="35"
                  style="margin-right: 16px" />
              </a>
              <a href="mailto:peterjbone41@gmail.com?subject=Asistencia%20a%20cliente&body=Hola,%20me%20gustaría%20obtener%20asistencia%20de%20sobre%20su%20Ecommerce%20de%20ropa😊">
                <img
                  src="https://i.postimg.cc/Gt3hxNzc/gmail-icon.png"
                  alt="gmail"
                  width="30"
                  style="position: relative; top: -5px" />
              </a>
						</div>
					</div>
				</div>
			</div>
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
const Usuario = require("../models/Usuario.js");
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
          // se crea y se guarda la compra en la BD
          const orderId = await createOrder(customer, data);

          // guardar ultima compra en el usuario
          const { userId } = await Compra.findById(orderId).populate("userId");
          await Usuario.updateOne(
            { _id: userId._id },
            { $set: { purchases: [...userId.purchases, orderId] } }
          );

          // enviar email al usuario
          const { transporter, mailOptions } = await settingEmail(
            customer,
            data,
            orderId
          );
          await sendMail(transporter, mailOptions);
        })
        .catch((err) => console.log(err.message));
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send().end();
  }
);

module.exports = router;