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
  genero: {
    type: String,
    index: 'text'
  },
  categoria: {
    type: String,
    index: 'text'
  },
  subcategoria: {
    type: String,
    index: 'text'
  },
});

const Producto = model("Producto", ProductSchema);
module.exports = Producto;