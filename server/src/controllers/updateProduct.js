const Producto = require("../models/Producto.js");

async function updateProduct(req, res) {
	const { id } = req.params;
	const updates = req.body;

	try {
		//? Busca el producto por _id
		const producto = await Producto.findById(id);

		if (!producto) {
			return res.status(404).json({ message: "Producto no encontrado" });
		}

		//? Actualizando el producto
		Object.assign(producto, updates);
		await producto.save();

		//? Respuesta con el producto actualizado
		return res.status(200).json(producto);
	} catch (error) {
		console.error("Error al actualizar el producto (backend):", error);
		return res.status(500).json({ message: "Error interno del servidor" });
	}
}

module.exports = updateProduct;
