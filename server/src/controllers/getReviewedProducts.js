const Producto = require("../models/Producto.js");

const getReviewedProducts = async (request, response) => {
  try {
    const reviews = request.body;
    for (const review of reviews) {
      if (!review.product) {
        const product = await Producto.findOne({
          _id: review.
            producto_id
        });
        if (product) {
          review.product = product;
        }
      }
    }
    response.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    response.status(404).send({ error, message: "Error al buscar productos de reseñas" });
  }
}

module.exports = getReviewedProducts;