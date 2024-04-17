const Carrito = require("../models/Carrito");

const vaciarCarrito = async (req, res) => {
  const { cartToken } = req.params;
  try {
    const updatedCart = await Carrito.findOneAndUpdate(
      { token: cartToken },
      { products: [] },
      { new: true }
    );
    console.log("Carrito vaciado correctamente");
    res
      .status(200)
      .json({ message: "Carrito vaciado correctamente", cart: updatedCart });
  } catch (error) {
    console.error("Error al vaciar el carrito:", error);
    res.status(500).json({ error: "Error al vaciar el carrito" });
  }
};

module.exports = vaciarCarrito;
