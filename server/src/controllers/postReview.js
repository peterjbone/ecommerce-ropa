const Usuario = require("../models/Usuario.js");
const Producto = require("../models/Producto.js");
const Resena = require("../models/Resena.js");

async function postReview(request, response) {
  try {
    const { producto_id, nombreUsuario, usuario_id, valoracion, descripcion } = request.body;

    const product = await Producto.findOne({
      _id: producto_id
    });
    if (product) {
      const user = await Usuario.findOne({
        _id: usuario_id
      });
      if (user) {
        const existingReview = await Resena.findOne({
          producto_id: producto_id,
          usuario_id: usuario_id
        });
        if (existingReview) {
          existingReview.valoracion = valoracion;
          existingReview.descripcion = descripcion;
          await existingReview.save();
        } else {
          const newReview = await Resena.create({
            producto_id: producto_id,
            nombreUsuario: nombreUsuario,
            usuario_id: usuario_id,
            valoracion: valoracion,
            descripcion: descripcion,
            esAceptada: false
          });
        }
        const reviews = await Resena.find({ usuario_id: usuario_id });

        return response.status(201).json(reviews);
      } else {
        return response.status(404).send('No se encontró el usuario');
      }
    } else {
      return response.status(404).send('No se encontró el producto');
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: 'Error interno de ruta /postReview' });
  }
}

module.exports = postReview;