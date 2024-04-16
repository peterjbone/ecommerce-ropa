const Carrito = require("../models/Carrito");

const deleteProductCarrito = async (req, res) => {
  try {
    const { variantId, token } = req.body;

    let carrito;
    if (!token) {
      return res
        .status(400)
        .json({ message: "Token de carrito no proporcionado" });
    }

    carrito = await Carrito.findOne({ token });
    if (!carrito) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    carrito.products = carrito.products.filter(
      (product) => product.variantId !== variantId
    );

    await carrito.save();

    res.status(200).json({
      message: "Producto eliminado del carrito correctamente",
      carrito,
    });
  } catch (error) {
    console.error("Error al eliminar producto del carrito:", error);
    res.status(500).json({
      message: "Hubo un error al eliminar el producto del carrito",
    });
  }
};

module.exports = deleteProductCarrito;
