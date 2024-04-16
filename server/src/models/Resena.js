const { Schema, model, models } = require("mongoose");

const ResenaSchema = new Schema({
  producto_id: {
    type: String,
    ref: "Producto",
    required: true
  },
  nombreUsuario: {
    type: String,
    required: true
  },
  usuario_id: {
    type: String,
    ref: "Usuario",
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
  },
  creadoEn: {
		type: Date,
		immutable: true,
		default: () => Date.now()
	},
  aceptadoEn: {
		type: Date,
		default: () => Date.now()
	},
});

const Resena = models.Resena || model("Resena", ResenaSchema);

module.exports = Resena;