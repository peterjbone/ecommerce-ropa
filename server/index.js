require("dotenv").config();

const server = require("./server.js");
const PORT = 3001;
const { connectDB, insertarDocumentos } = require("./db.js");

server.listen(PORT, { force: true }, async () => {
	console.log(`Servidor levantado en el puerto: ${PORT} (backend)`);
<<<<<<< HEAD
	await connectDB()
		.then(() => console.log("Conexión a la base de datos establecida"));
=======
	await connectDB();
	// await insertarDocumentos();
>>>>>>> d402e9b1ef6af8e79d2ce9251c18d41763080d95
});
