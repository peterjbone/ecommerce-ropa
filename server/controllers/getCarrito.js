const Carrito = require("../models/Carrito");

const getCarrito = async (req, res) => {
  try {
    const { cartToken } = req.params;
    const carrito = await Carrito.findOne({ token: cartToken });
    if (!carrito) {
      return res.status(404).json({ message: "No se encontró el carrito" });
    }
    res.status(200).json({ products: carrito.products });
  } catch (error) {
    console.error("Error al obtener productos del carrito:", error);
    res.status(500).json({ message: "Error al obtener productos del carrito" });
  }
};

module.exports = getCarrito;
