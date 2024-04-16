const Producto = require("../models/Producto.js");

const getFavorites = async (request, response) => {
  try {
    const favorites = request.body;
    const favoritos = await Producto.find({ _id: { $in: favorites } });
    response.status(200).json(favoritos || []);
  } catch (error) {
    console.error(error);
    response.status(404).send({ error, message: "Error al buscar favoritos" });
  }
}

module.exports = getFavorites;