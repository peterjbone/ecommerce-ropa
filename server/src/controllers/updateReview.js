const Resena = require("../models/Resena.js");

async function updateReview(request, response) {
  try {
    const { id } = request.params;
    const review = await Resena.findById(id);

    if (!review) {
      return response.status(404).json({ message: 'Reseña no encontrada' });
    }
    review.esAceptada = !review.esAceptada;
    await review.save();

    response.status(200).json();
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: 'Error interno de ruta /updateReview' });
  }
}

module.exports = updateReview;
