const Producto = require("../models/Producto.js");

const getProductById = async (req, res) => {
	const { id } = req.params;

	try {
		const product = await Producto.findOne({
			_id: id
		});

		if (product) {
			res.status(200).json(product);
		} else {
			res.status(404).send("No se encontro el producto.");
		}
	} catch (error) {
		console.log("Error interno de ruta /getProductById", error);
		res.status(500).json({ message: error.message });
	}
};

module.exports = getProductById;
