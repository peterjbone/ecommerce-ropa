const { Schema, model, models } = require("mongoose");

const ResenaSchema = new Schema({
  producto_id: {
    type: String,
    required: true
  },
  nombreUsuario: {
    type: String,
    required: true
  },
  usuario_id: {
    type: String,
    required: true
  },
  valoracion: {
    type: Number,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  esAceptada: {
    type: Boolean,
    required: true
  }
});

const Resena = models.Resena || model("Resena", ResenaSchema);

module.exports = Resena;