const mongoose = require('mongoose');

const imagenSchema = new mongoose.Schema({
  producto_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto'
  },
  color_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Color'
  },
  imagenes: [String],
});

const Stock = mongoose.model('Imagen', imagenSchema);

module.exports = Stock;