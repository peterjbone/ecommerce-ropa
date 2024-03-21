const Producto = require("../models/Producto.js");

async function updateProduct(req, res) {
	const { id } = req.params;
	const updates = req.body;

	try {
		const producto = await Producto.findById(id);

		if (!producto) {
			return res.status(404).json({ message: "Producto no encontrado" });
		}
	} catch (error) {
		console.error("Error al actualizar el producto (backend):", error);
		res.status(500).json({ message: "Error interno del servidor" });
	}
}

module.exports = updateProduct;
