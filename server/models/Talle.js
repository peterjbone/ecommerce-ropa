const mongoose = require('mongoose');

const talleSchema = new mongoose.Schema({
  nombre: String,
});

const Talle = mongoose.model('Talle', talleSchema);

module.exports = Talle;