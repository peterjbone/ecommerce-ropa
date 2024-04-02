const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  nombre: String,
  codigoHex: String,
});

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;