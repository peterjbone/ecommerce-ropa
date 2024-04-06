const { Schema, model, models } = require("mongoose");

const CartSchema = new Schema({
  token: {
    type: String,
    unique: true,
  },
  products: [
    {
      nombre: String,
      descripcion: String,
      marca: String,
      genero: String,
      precio: Number,
      imagen: String,
      opcion: {
        color: String,
        talla: String,
        stock: Number,
      },
      quantity: Number,
      variantId: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Carrito = models.Carrito || model("Carrito", CartSchema);
module.exports = Carrito;
