require("dotenv").config();

const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto.js");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

//* STRIPE CHECKOUT SESSION
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
      allowed_countries: ["US", "CA", "EC", "BR", "CL"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day air",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    customer: customer.id,
    line_items,
    mode: "payment",
    success_url: `${process.env.FRONT_URL}/checkout-success`,
    cancel_url: `${process.env.FRONT_URL}/carrito`,
  });

  res.send({ url: session.url });
});

//* ------------------ CREANDO REGISTRO DE COMPRA (función) ---------------------
const Compra = require("../models/Compra.js");

const createOrder = async (customer, data) => {
  const products = JSON.parse(customer.metadata.cart);

  try {
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
      total: data.amount_total,
      shipping: data.customer_details,
      payment_status: data.payment_status,
    });

    const savedOrder = await newOrder.save();
    console.log("Compra procesada:", savedOrder);

    //todo: aquí deberíamos enviar un email al usuario sobre la compra exitosa del producto
  } catch (error) {
    console.error(error);
  }
};

//* STRIPE WEBHOOK
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
        .catch((err) => console.error(err.message));
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send().end();
  }
);

module.exports = router;
