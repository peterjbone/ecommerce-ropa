const Producto = require("../models/Producto.js");

async function removeProduct(req, res) {
	const { id } = req.params;

	try {
		const productoEliminado = await Producto.findOneAndDelete({
			_id: id
		});

		if (productoEliminado) {
			console.log(productoEliminado);
			return res
				.status(200)
				.send("Se ha eliminado el producto de la base de datos");
		} else {
			console.log(productoEliminado);
			return res
				.status(404)
				.send("No se encontro el producto con ese id o ya se habia eliminado.");
		}
	} catch (error) {
		//* Error interno de Mongoose
		//* No se encontro el id
		console.error(error);
		return res.status(500).send(error.message);
	}
}

module.exports = removeProduct;
