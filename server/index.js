require("dotenv").config();

const server = require("./server.js");
const PORT = 3001;
const { connectDB, insertarDocumentos } = require("./db.js");

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", async () => {
  await connectDB();
  // await insertarDocumentos();
  console.log(`Server listening on port ${port}`);
})
