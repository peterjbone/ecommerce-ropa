const Usuario = require("../models/Usuario.js");
const Compra = require("../models/Compra.js");

async function getUserPurchase(req, res) {
	const { id } = req.query;

	try {
		const user = await Usuario.findById(id);

		const lastPurchase = user.purchases[user.purchases.length - 1];

		const lastPurchasePopulated = await Compra.findById(lastPurchase).populate(
			"products.productId"
		);

		const response = {
			userId: user._id,
			name: user.name,
			email: user.email,
			lastPurchase: lastPurchasePopulated
		};

		return res.status(200).json(response);
	} catch (error) {
		//* Error interno de Mongoose
		//* No se encontro el id
		console.log(error);
		return res.status(500).send(error.message);
	}
}

module.exports = getUserPurchase;
