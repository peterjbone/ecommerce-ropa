const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  producto_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto'
  },
  color_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Color'
  },
  talle_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Talle'
  },
  stock: Number,
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;