const Producto = require("../models/Producto.js");

const getPurchases = async (request, response) => {
  try {
    const purchases = request.body;
    for (const purchase of purchases) {
      for (let i = 0; i < purchase.products.length; i++) {
        if (!purchase.products[i].product) {
        const product = await Producto.findOne({ _id: purchase.products[i].idProductOriginal });
          if (product) {
            purchase.products[i].product = product;
          }
        }
      }
    }
    response.status(200).json(purchases);
  } catch (error) {
    console.error(error);
    response.status(404).send({ error, message: "Error al buscar productos de compras" });
  }
}

module.exports = getPurchases;