require("dotenv").config();

const server = require("./server.js");
const PORT = 3001;
const {
  connectDB,
  insertarTodo,
  insertarProductos,
  insertarResenas,
} = require("./db.js");

server.listen(PORT, async () => {
  console.log(`Servidor levantado en el puerto: ${PORT} (backend)`);
  await connectDB(); // Descomentar lo q sea necesario
  // await insertarTodo();
  // await insertarProductos();
  // await insertarResenas();
});
