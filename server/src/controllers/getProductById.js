const Producto = require("../models/Producto.js");
const Resena = require("../models/Resena.js");

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Producto.findOne({
      _id: id
    });

    if (product) {
      const allReviews = await Resena.find({
        producto_id: id
      });
      const topReviews = await Resena.find({
        producto_id: id
      }).sort({ valoracion: -1 }).limit(10);
      const bottomReviews = await Resena.find({
        producto_id: id
      }).sort({ valoracion: 1 }).limit(10);
      const randomReviews = await Resena.aggregate([
        { $match: { producto_id: id } },
        { $sample: { size: 10 } }
      ]);
      const averageReviews = await Resena.aggregate([
        { $match: { producto_id: id, esAceptada: true } },
        {
          $group: {
            _id: null,
            promedio: { $avg: "$valoracion" }
          }
        },
        {
          $project: {
            _id: 0,
            promedio: {
              $cond: [
                { $gte: [{ $mod: ["$promedio", 1] }, 0.5] },
                { $ceil: "$promedio" },
                { $floor: "$promedio" }
              ]
            }
          }
        },
        {
          $lookup: {
            from: "resenas",
            let: { promedio: "$promedio", producto_id: id },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$producto_id", "$$producto_id"] },
                      { $eq: ["$valoracion", "$$promedio"] }
                    ]
                  }
                }
              }
            ],
            as: "reseñas"
          }
        },
        { $unwind: "$reseñas" },
        { $limit: 10 }
      ]);

      const reviews = {
        allReviews: allReviews || [],
        topReviews: topReviews || [],
        bottomReviews: bottomReviews || [],
        averageReviews: averageReviews || [],
        randomReviews: randomReviews || []
      };

      res.status(200).json({ product, reviews });
    } else {
      res.status(404).send("No se encontró el producto.");
    }
  } catch (error) {
    console.log("Error interno de ruta /getProductById", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getProductById;