const Producto = require("../models/Producto.js");
const Resena = require("../models/Resena.js");

const getProductById = async (request, response) => {
  const { id } = request.params;

  try {
    const product = await Producto.findOne({
      _id: id
    });
    if (!product) {
      return response.status(404).send("No se encontró el producto.");
    }
    const allReviews = await Resena.find({
      producto_id: id, esAceptada: true
    });
    const topReviews = await Resena.find({
      producto_id: id, esAceptada: true
    }).sort({ valoracion: -1 }).limit(5);
    const bottomReviews = await Resena.find({
      producto_id: id, esAceptada: true
    }).sort({ valoracion: 1 }).limit(5);
    const randomReviews = await Resena.aggregate([
      { $match: { producto_id: id, esAceptada: true } },
      { $sample: { size: 5 } }
    ]);
    const averageReviews = await Resena.aggregate([
      { $match: { producto_id: id, esAceptada: true } },
      {
        $group: {
          _id: null,
          average: { $avg: "$valoracion" }
        }
      },
      {
        $project: {
          _id: 0,
          average: {
            $cond: [
              { $gte: [{ $mod: ["$average", 1] }, 0.5] },
              { $ceil: "$average" },
              { $floor: "$average" }
            ]
          }
        }
      },
      {
        $lookup: {
          from: "resenas",
          let: { average: "$average", producto_id: id },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$producto_id", "$$producto_id"] },
                    {
                      $or: [
                        { $eq: ["$valoracion", "$$average"] },
                        { $eq: ["$valoracion", { $add: ["$$average", 0.5] }] },
                        { $eq: ["$valoracion", { $subtract: ["$$average", 0.5] }] }
                      ]
                    }
                  ]
                }
              }
            },
            { $limit: 5 }
          ],
          as: "averageArray"
        }
      },
      { $unwind: "$averageArray" },
      { $replaceRoot: { newRoot: "$averageArray" } }
    ]);

    const reviews = {
      allReviews: allReviews || [],
      topReviews: topReviews || [],
      bottomReviews: bottomReviews || [],
      averageReviews: averageReviews || [],
      randomReviews: randomReviews || [],
    };

    if (product.oferta && product.oferta.offActiva) {
      if (product.oferta.aplicado) {
        return response.status(200).json({
          message: "El descuento ya ha sido aplicado anteriormente",
          product,
          reviews,
        });
      } else {
        const descuento = product.oferta.Descuento;
        const precioConDescuento = product.precio * (1 - descuento / 100);
        product.precioOriginal = product.precio;

        product.precio = precioConDescuento;
        const ofertaActualizada = { ...product.oferta, aplicado: true };

        product.oferta = ofertaActualizada;

        await product.save();

        return response.status(200).json({
          message: "Precio actualizado exitosamente",
          product,
          reviews,
        });
      }
    }

    return response
      .status(200)
      .json({ message: "Producto y reseñas", product, reviews });
  } catch (error) {
    console.error("Error interno de ruta /getProductById", error);
    return response.status(500).json({ message: error.message });
  }
};

module.exports = getProductById;
