// require("dotenv").config();

// const express = require("express");
// const router = express.Router();

// const Stripe = require("stripe");
// const stripe = Stripe(process.env.STRIPE_KEY);

// router.post("/create-checkout-session", async (req, res) => {
// 	const line_items = req.body.cartItems.map((item) => {
// 		return {
// 			price_data: {
// 				currency: "usd",
// 				product_data: {
// 					name: item.nombre,
// 					images: [item.imagen],
// 					description: item.descripcion,
// 					metadata: {
// 						id: item._id
// 					}
// 				},
// 				unit_amount: item.precio * 100
// 			},
// 			quantity: item.cartQuantity
// 		};
// 	});

// 	const session = await stripe.checkout.sessions.create({
// 		payment_method_types: ["card"],
// 		shipping_address_collection: {
// 			allowed_countries: ["US", "CA", "EC"]
// 		},
// 		shipping_options: [
// 			{
// 				shipping_rate_data: {
// 					type: "fixed_amount",
// 					fixed_amount: {
// 						amount: 0,
// 						currency: "usd"
// 					},
// 					display_name: "Free shipping",
// 					delivery_estimate: {
// 						minimum: {
// 							unit: "business_day",
// 							value: 5
// 						},
// 						maximum: {
// 							unit: "business_day",
// 							value: 7
// 						}
// 					}
// 				}
// 			},
// 			{
// 				shipping_rate_data: {
// 					type: "fixed_amount",
// 					fixed_amount: {
// 						amount: 1500,
// 						currency: "usd"
// 					},
// 					display_name: "Next day air",
// 					delivery_estimate: {
// 						minimum: {
// 							unit: "business_day",
// 							value: 1
// 						},
// 						maximum: {
// 							unit: "business_day",
// 							value: 1
// 						}
// 					}
// 				}
// 			}
// 		],
// 		phone_number_collection: {
// 			enabled: true
// 		},
// 		line_items,
// 		mode: "payment",
// 		success_url: `${process.env.FRONT_URL}/checkout-success`,
// 		cancel_url: `${process.env.FRONT_URL}/cart`
// 	});

// 	res.send({ url: session.url });
// });

// module.exports = router;
