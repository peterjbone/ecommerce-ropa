require("dotenv").config();
const mongoose = require("mongoose");

//? ------------------------ Validando que existe una URL de MongoDB -----------------------
if (!process.env.MONGODB_URL) {
  throw new Error("MONGODB_URL debe estar definido (backend)");
}

//? ----------------- Conexión con la base de datos "ecommerce" -------------------
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conexión establecida con la base de datos \"ecommerce\" (backend)");
  } catch (error) {
    console.log("Error al conectarse a la base de datos \"ecommerce\" (backend):", error.message);
  }
}

//* ---------------- Función para Insertar documentos necesarios en MongoDB --------------------
const productos = require("./utils/productos.js"); // Array de productos
const resenas = require("./utils/resenas.js"); // Array de reseñas
const Producto = require("./src/models/Producto.js"); // Colección de productos
const Resena = require("./src/models/Resena.js"); // Colección de productos

async function insertarProductos() {
  try {
    await Producto.insertMany(productos);
    console.log("Productos insertados correctamente");
  } catch (error) {
    console.log("Error al insertar productos:", error.message);
  }
}

async function insertarResenas() {
  try {
    const productIds = await Producto.distinct("_id");
    let modifiedReviews = [], productsIndex = 0, reviewsIndex = 0;

    while (reviewsIndex < resenas.length && productsIndex < productIds.length) {
      const currentProductId = productIds[productsIndex];
      const reviewsPerProduct = Math.floor(Math.random() * 8) + 3; // Genera un número aleatorio entre 3 y 10, 
      const reviewsEndIndex = Math.min(reviewsIndex + reviewsPerProduct, resenas.length);

      for (let i = reviewsIndex; i < reviewsEndIndex; i++) {
        const resena = resenas[i];
        modifiedReviews.push({
          ...resena,
          producto_id: currentProductId,
          esAceptada: true
        });
      }
      reviewsIndex = reviewsEndIndex;
      productsIndex++;
    }

    await Resena.insertMany(modifiedReviews);
    console.log("Reseñas insertadas correctamente");
  } catch (error) {
    console.log("Error al insertar reseñas:", error.message);
  }
}

async function insertarTodo() {
  try {
    await insertarProductos();
    await insertarResenas();
    console.log("Bases De Datos pobladas exitosamente");
  } catch (error) {
    console.log("Error al insertar todo:", error.message);
  }
}

module.exports = { connectDB, insertarTodo, insertarProductos, insertarResenas };