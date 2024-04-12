const Carrito = require("../models/Carrito");

const addProductToCart = async (req, res) => {
  try {
    const {
      token,
      nombre,
      genero,
      descripcion,
      marca,
      precio,
      oferta,
      precioOriginal,
      imagen,
      opcion,
      quantity,
      idProductOriginal,
    } = req.body;

    const variantId = `${nombre}-${opcion.color}-${opcion.talla}`;

    let carrito;
    if (token) {
      carrito = await Carrito.findOne({ token });
      if (!carrito) {
        carrito = new Carrito({ token, products: [] });
      }
    } else {
      const randomToken = Math.random().toString(36).substring(7);
      carrito = new Carrito({ token: randomToken, products: [] });
    }

    const existingProduct = carrito.products.find(
      (product) => product.variantId === variantId
    );
    if (existingProduct) {
      existingProduct.quantity += +quantity;
    } else {
      carrito.products.push({
        nombre,
        descripcion,
        marca,
        genero,
        precio,
        precioOriginal,
        oferta,
        imagen,
        opcion: {
          color: opcion.color,
          talla: opcion.talla,
          stock: opcion.stock,
        },
        quantity: +quantity,
        variantId,
        idProductOriginal,
      });
    }

    await carrito.save();

    res.status(200).json({
      message: "Producto agregado al carrito correctamente",
      carrito,
      token: carrito.token,
    });
  } catch (error) {
    console.error("Error al agregar producto al carrito:", error);
    res.status(500).json({
      message: "Hubo un error al agregar el producto al carrito ",
    });
  }
};

module.exports = addProductToCart;
