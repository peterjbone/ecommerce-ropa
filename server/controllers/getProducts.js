const Producto = require("../models/Producto.js");

const getProducts = async (req, res) => {
	const { categoria, genero, subcategoria, color, precio, marca } = req.query;

	try {
		let allProducts = await Producto.find();

		//* FILTRADO
		if (categoria) {
			allProducts = allProducts.filter(
				(producto) => producto.categoria === categoria
			);
		}

		if (genero) {
			allProducts = allProducts.filter(
				(producto) => producto.genero === genero
			);
		}

		if (subcategoria) {
			allProducts = allProducts.filter(
				(producto) => producto.subcategoria === subcategoria
			);
		}

		if (marca) {
			allProducts = allProducts.filter((producto) => producto.marca === marca);
		}

		if (color) {
			// Filtramos los productos según el color
			allProducts = allProducts.filter((producto) => {
				// Iteramos sobre las opciones de color de cada producto
				for (const opcionColor of producto.opciones) {
					// Iteramos sobre los nombres de color en cada opción
					for (const nombreColor of opcionColor.colores.nombres) {
						// Si el nombre del color coincide con el colorQuery, devolvemos true
						if (nombreColor === color) {
							return true;
						}
					}
				}
				// Si no encontramos el color en ninguna opción, devolvemos false
				return false;
			});
		}

		if (precio) {
			allProducts = allProducts.filter(
				(producto) =>
					producto.precio <= Number(precio) &&
					producto.precio >= Number(precio) - 25
			);
		}

		//* ORDENAMIENTOS

		//* PAGINADO - LIMIT

		if (allProducts.length > 0) {
			res.status(200).json(allProducts);
		} else {
			res.status(404).send("No se encontraron productos.");
		}
	} catch (error) {
		console.log("Error interno de ruta /getProducts (backend)", error);
		res.status(500).json({ message: error.message });
	}
};

module.exports = getProducts;
