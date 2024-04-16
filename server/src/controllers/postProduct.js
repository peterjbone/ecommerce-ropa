const Producto = require("../models/Producto.js");

async function postProduct(req, res) {
	const {
		nombre,
		marca,
		descripcion,
		precio,
		oferta,
		activo,
		productoNuevo,
		categoria,
		genero,
		subcategoria,
		opciones
	} = req.body;

	//* Entra al if si la info esta completa
	//prettier-ignore
	if (
    nombre, marca, descripcion, precio, oferta, activo, productoNuevo, categoria, genero, subcategoria, opciones
  ) {
    let productoDB = await Producto.findOne({
      nombre,
		  marca,	
      precio,
		  categoria,
		  genero,
		  subcategoria
    })

    //* Entra si el producto YA estaba en la BD
    if (productoDB) {
      console.log("El producto ya existe en la BD.");
      return res.status(200).json(productoDB)
    } else {
      //* La info SI esta completa pero el producto NO esta en BD
      try {
        let nuevoProducto = await Producto.create({
					nombre,
					marca,
					descripcion,
					precio,
					oferta,
					activo,
					productoNuevo,
					categoria,
					genero,
					subcategoria,
					opciones
        });
        
        console.log("El producto a sido creado!");
        return res.status(200).json(nuevoProducto)
      } catch (error) {
				//! 1) Algun valor de un atributo puede estar mal
        //! 2) entra por algun error interno de Mongoose
        console.error(error);
				return res.status(500).send(error.message);
			}
		}
  } else {
		//! si entra al ELSE la info esta incompleta
		res.status(400).send("La información esta incompleta!");
	}
}

module.exports = postProduct;
