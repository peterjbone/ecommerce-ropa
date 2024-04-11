require("dotenv").config();

const server = require("./server.js");
const { connectDB, insertarTodo, insertarProductos, insertarResenas } = require("./db.js");

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", async () => {
	console.log(`Servidor levantado en el puerto: ${port} (backend)`);
	await connectDB(); // Descomentar lo q sea necesario
	// await insertarTodo();
	// await insertarProductos();
	// await insertarResenas();
});