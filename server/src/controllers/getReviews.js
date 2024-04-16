const Resena = require("../models/Resena.js");
const Producto = require("../models/Producto.js");

async function getReviews(request, response) {
  try {
    let { buscarPor, busqueda, valoracionSolo, valoracionDesde, valoracionHasta, fechaSolo, fechaDesde, fechaHasta, fechaAceptadaSolo, fechaAceptadaDesde, fechaAceptadaHasta, aceptada, ordenado, ascendente, pagina } = request.body;

    let filters = {};

    if (valoracionDesde === "--") {
      valoracionDesde = "";
    }
    if (valoracionHasta === "--") {
      valoracionHasta = "";
    }
    if (busqueda) {
      switch (buscarPor) {
        case "usuario":
          filters["nombreUsuario"] = { $regex: new RegExp(busqueda, "i") };
          break;
        case "idProducto":
          filters["producto_id"] = busqueda;
          break;
        case "nombreProducto":
          // filters["product.name"] = { $regex: new RegExp(busqueda, "i") }; // Momentaneamente desactivado
          break;
        default:
          break;
      }
    }
    if (valoracionSolo) {
      if (valoracionDesde) {
        filters["valoracion"] = valoracionDesde;
      }
    } else {
      if (valoracionDesde) {
        filters["valoracion"] = { $gte: valoracionDesde };
      }
      if (valoracionHasta) {
        filters["valoracion"] = { ...filters["valoracion"], $lte: valoracionHasta };
      }
    }
    if (fechaSolo) {
      if (fechaDesde) {
        filters["creadoEn"] = fechaDesde;
      }
    } else {
      if (fechaDesde) {
        filters["creadoEn"] = { $gte: fechaDesde };
      }
      if (fechaHasta) {
        filters["creadoEn"] = { ...filters["creadoEn"], $lte: fechaHasta };
      }
    }
    if (fechaAceptadaSolo) {
      if (fechaAceptadaDesde) {
        filters["aceptadoEn"] = fechaAceptadaDesde;
      }
    } else {
      if (fechaAceptadaDesde) {
        filters["aceptadoEn"] = { $gte: fechaAceptadaDesde };
      }
      if (fechaAceptadaHasta) {
        filters["aceptadoEn"] = { ...filters["aceptadoEn"], $lte: fechaAceptadaHasta };
      }
    }
    switch (aceptada) {
      case "notAccepted":
        filters["esAceptada"] = false;
        break;
      case "accepted":
        filters["esAceptada"] = true;
        break;
      default:
        break;
    }
    const sortOptions = {};

    switch (ordenado) {
      case "fecha":
        sortOptions["creadoEn"] = ascendente ? 1 : -1;
        break;
      case "fechaAceptacion":
        sortOptions["aceptadoEn"] = ascendente ? 1 : -1;
        break;
      case "valoracion":
        sortOptions["valoracion"] = ascendente ? 1 : -1;
        break;
      case "nombreUsuario":
        sortOptions["nombreUsuario"] = ascendente ? 1 : -1;
        break;
      default:
        break;
    }
    const skip = (pagina - 1) * 20;

    const count = await Resena.countDocuments(filters);
    let reviewsWithoutProducts = await Resena.find(filters)
      .sort(sortOptions)
      .skip(skip)
      .limit(20);

    let reviews = [];

    for (const review of reviewsWithoutProducts) {
      const product = await Producto.findOne({
        _id: review.producto_id,
      });
      if (product) {
        const reviewWithProduct = {
          ...review.toObject(),
          product: product,
        };
        reviews.push(reviewWithProduct);
      }
    }

    response.status(200).json({ reviews, count });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: "Error interno de ruta /getReviews" });
  }
}

module.exports = getReviews;