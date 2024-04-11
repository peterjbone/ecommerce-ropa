const Producto = require("../models/Producto.js");
const Resena = require("../models/Resena.js");

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    let product = await Producto.findOne({ _id: id });
    if (!product) {
      return res.status(404).send("No se encontró el producto.");
    }

    // Buscar reseñas del producto
    const allReviews = await Resena.find({ producto_id: id });
    const topReviews = await Resena.find({ producto_id: id })
      .sort({ valoracion: -1 })
      .limit(10);
    const bottomReviews = await Resena.find({ producto_id: id })
      .sort({ valoracion: 1 })
      .limit(10);
    const randomReviews = await Resena.aggregate([
      { $match: { producto_id: id } },
      { $sample: { size: 10 } },
    ]);
    const averageReviews = await Resena.aggregate([
      { $match: { producto_id: id, esAceptada: true } },
      {
        $group: {
          _id: null,
          promedio: { $avg: "$valoracion" },
        },
      },
      {
        $project: {
          _id: 0,
          promedio: {
            $cond: [
              { $gte: [{ $mod: ["$promedio", 1] }, 0.5] },
              { $ceil: "$promedio" },
              { $floor: "$promedio" },
            ],
          },
        },
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
                    { $eq: ["$valoracion", "$$promedio"] },
                  ],
                },
              },
            },
          ],
          as: "reseñas",
        },
      },
      { $unwind: "$reseñas" },
      { $limit: 10 },
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
        return res.status(200).json({
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

        return res.status(200).json({
          message: "Precio actualizado exitosamente",
          product,
          reviews,
        });
      }
    }

    return res
      .status(200)
      .json({ message: "Producto y reseñas", product, reviews });
  } catch (error) {
    console.log("Error interno de ruta /getProductById", error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getProductById;
