const Resena = require("../models/Resena.js");

async function getReviews(request, response) {
  try {
    const reviews = await Resena.find();
    response.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: 'Error interno de ruta /getReviews' });
  }
}

module.exports = getReviews;