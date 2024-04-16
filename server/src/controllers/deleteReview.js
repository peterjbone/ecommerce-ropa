const Resena = require("../models/Resena.js");

async function deleteReview(request, response) {
  try {
    const { id } = request.params;
    const review = await Resena.findOneAndDelete({ _id: id });

    if (!review) {
      return response.status(404).json({ message: "Resena no encontrada" });
    }

    response.status(200).json({ message: "Resena eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: "Error interno de ruta /deleteReview" });
  }
}

module.exports = deleteReview;
