require("dotenv").config();

const server = require("./server.js");
const port = process.env.PORT;
const { connectDB } = require("./db.js");

server.listen(port, async () => {
	console.log(`Servidor levantado en el puerto: ${port} (backend)`);
	await connectDB();
});
