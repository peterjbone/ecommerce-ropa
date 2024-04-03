const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
  nombre: {
    type: String,
    index: 'text'
  },
  marca: {
    type: String,
    index: 'text'
  },
  descripcion: {
    type: String,
    index: 'text'
  },
  precio: Number,
  oferta: {
    type: Schema.Types.Mixed,
    default: {}
  },
  activo: Boolean,
  productoNuevo: Boolean,
  categoria: String,
  genero: String,
  subcategoria: String,
  opciones: {
    type: Schema.Types.Mixed,
    default: []
  }
});

const Producto = models.Producto || model("Producto", ProductSchema);
module.exports = Producto;