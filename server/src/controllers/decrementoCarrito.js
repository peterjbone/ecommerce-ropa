const Carrito = require("../models/Carrito");

const decrementoCarrito = async (req, res) => {
  try {
    const { variantId, token } = req.body;

    const carrito = await Carrito.findOne({ token });
    if (!carrito) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    let productToUpdate = carrito.products.find(
      (product) => product.variantId === variantId
    );
    if (!productToUpdate) {
      return res
        .status(404)
        .json({ message: "Producto no encontrado en el carrito" });
    }

    if (productToUpdate.quantity === 1) {
      carrito.products = carrito.products.filter(
        (product) => product.variantId !== variantId
      );
    } else {
      productToUpdate.quantity -= 1;
    }

    await carrito.save();

    return res.status(200).json({
      message: "Cantidad del producto decrementada correctamente",
      carrito,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "Hubo un error al decrementar la cantidad del producto en el carrito",
    });
  }
};

module.exports = decrementoCarrito;
