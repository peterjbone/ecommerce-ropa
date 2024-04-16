require("dotenv").config();

const server = require("./server.js");
const PORT = 3001;
const { connectDB, insertarTodo, insertarProductos, insertarResenas } = require("./db.js");

server.listen(PORT, async () => {
<<<<<<< HEAD
  console.log(`Servidor levantado en el puerto: ${PORT} (backend)`);
  await connectDB();
  //insertarDocumentos();
});

=======
	console.log(`Servidor levantado en el puerto: ${PORT} (backend)`);
	await connectDB(); // Descomentar lo q sea necesario
	// await insertarTodo();
	// await insertarProductos();
	// await insertarResenas();
});
>>>>>>> 44b2d3e4a07f500eac4818fda6e19c44ae2351b2
