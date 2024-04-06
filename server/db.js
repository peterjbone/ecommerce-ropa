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
		console.log(
			"Conexión establecida con la base de datos 'ecommerce' (backend)"
		);
	} catch (error) {
		console.log(
			"Error al conectarse a la base de datos 'ecommerce' (backend):",
			error.message
		);
	}
}

//* -------------------- Insertar documentos necesarios en MongoDB ----------------------
const productos = require("./src/utils/productos.js"); // Array de productos
const Producto = require("./src/models/Producto.js"); // Colección de productos

async function insertarDocumentos() {
	try {
		await Producto.insertMany(productos);
		console.log("Documentos insertados correctamente");
	} catch (error) {
		console.log("Error al insertar documentos:", error.message);
	}
}

module.exports = { connectDB, insertarDocumentos };
