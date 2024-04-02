require("dotenv").config();
const mongoose = require("mongoose");
const productos = require("./utils/productos.js");
const Producto = require("./models/Producto.js");
const Talle = require("./models/Talle.js");
const Color = require("./models/Color.js");
const Stock = require("./models/Stock.js");
const Imagen = require("./models/Imagen.js");
const { SingleBar } = require('cli-progress');

const progressBar = new SingleBar({}, {
  format: 'Progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
});

async function connectDB() {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL debe estar definido (backend)");
    }
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      "Conexión establecida con la base de datos 'ecommerce' (backend)"
    );
  } catch (error) {
    console.error(
      "Error al conectarse a la base de datos 'ecommerce' (backend):",
      error.message
    );
  }
}

async function borrarDatosPrevios() {
  try {
    await Producto.deleteMany();
    await Color.deleteMany();
    await Talle.deleteMany();
    await Imagen.deleteMany();
    await Stock.deleteMany();

    console.log('Datos previos borrados correctamente.');
  } catch (error) {
    console.error('Error al borrar los datos:', error);
  }
}

async function llenarBaseDeDatos() {
  try {
    console.log('Llenando base de datos');
    let count = 0;
    progressBar.start(productos.length, count);
    for (const data of productos) {
      const producto = await Producto.create({
        nombre: data.nombre,
        marca: data.marca,
        descripcion: data.descripcion,
        precio: data.precio,
        oferta: data.oferta,
        activo: data.activo,
        productoNuevo: data.productoNuevo,
        categoria: data.categoria,
        genero: data.genero,
        subcategoria: data.subcategoria,
      });
      for (const opcion of data.opciones) {
        const colorExistente = await Color.findOne({ nombre: opcion.colores.nombres }).exec();
        let color;
        if (colorExistente) {
          color = colorExistente;
        } else {
          color = await Color.create({
            nombre: opcion.colores.nombres,
            codigoHex: opcion.colores.codigosHex
          });
        }
        await Imagen.create({
          producto_id: producto._id,
          color_id: color._id,
          imagenes: opcion.imagenes,
        });
        for (const talla of opcion.tallas) {
          const talleExistente = await Talle.findOne({ nombre: talla.talla }).exec();
          let talle;
          if (talleExistente) {
            talle = talleExistente;
          } else {
            talle = await Talle.create({
              nombre: talla.talla,
            });
          }
          await Stock.create({
            producto_id: producto._id,
            color_id: color._id,
            talle_id: talle._id,
            stock: Math.floor(Math.random() * 31),
          });
        }
      }
      count++;
      progressBar.update(count);
    }
    progressBar.stop();
    console.log('Base de datos llenada correctamente');
  } catch (error) {
    console.error('Error al agregar los productos:', error);
  }
}

(async function gestionarBaseDeDatos() {
  try {
    await connectDB();
    await borrarDatosPrevios();
    await llenarBaseDeDatos();
    await mongoose.disconnect();
  } catch (error) {

  }
})();