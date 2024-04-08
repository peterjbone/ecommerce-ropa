const Carrito = require("../models/Carrito");

const deleteCarrito = async (req, res) => {
  const { cartToken } = req.params;
  try {
    await Carrito.findOneAndDelete({ token: cartToken });
    console.log("Carrito eliminado correctamente");
    res.status(200).json({ message: "Carrito eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el carrito:", error);
    res.status(500).json({ error: "Error al eliminar el carrito" });
  }
};

module.exports = deleteCarrito;
