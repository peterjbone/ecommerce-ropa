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
      oferta: {
        type: Schema.Types.Mixed,
        default: {},
      },
      precio: Number,
      precioOriginal: { type: Number, default: null },
      imagen: String,
      opcion: {
        color: String,
        talla: String,
        stock: Number,
      },
      quantity: Number,
      variantId: String,
      idProductOriginal: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Carrito = models.Carrito || model("Carrito", CartSchema);
module.exports = Carrito;
