const Producto = require("../models/Producto.js");

const getProducts = async (req, res) => {
	const {
		categoria,
		genero,
		subcategoria,
		color,
		precio,
		marca,
		ordenPrecio,
		ordenAlfa,
		pagina
	} = req.query;

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

		/* if (precio) {
			allProducts = allProducts.filter(
				(producto) =>
					producto.precio <= Number(precio) &&
					producto.precio >= Number(precio) - 25
			);
		} */

		//* ORDENAMIENTOS
		if (ordenPrecio) {
			if (ordenPrecio === "asc") {
				allProducts = allProducts.sort((a, b) => a.precio - b.precio);
			}
			if (ordenPrecio === "desc") {
				allProducts = allProducts.sort((a, b) => b.precio - a.precio);
			}
		} else if (ordenAlfa) {
			if (ordenAlfa === "asc") {
				allProducts = allProducts.sort((a, b) =>
					a.nombre > b.nombre ? 1 : -1
				);
			}
			if (ordenAlfa === "desc") {
				allProducts = allProducts.sort((a, b) =>
					a.nombre < b.nombre ? 1 : -1
				);
			}
		}

		//* PAGINADO - LIMIT
		if (pagina) {
			const startIndex = (parseInt(pagina) - 1) * 10;
			allProducts = allProducts.slice(startIndex, startIndex + 10);
		}

		//* --------------- RESPONDIENDO LOS PRODUCTOS ---------------------
		if (allProducts.length > 0) {
			console.log(allProducts.length);
			return res.status(200).json(allProducts);
		} else {
			return res.status(404).send("No se encontraron productos.");
		}
	} catch (error) {
		console.log("Error interno de ruta /getProducts (backend)", error);
		res.status(500).json({ message: error.message });
	}
};

module.exports = getProducts;
