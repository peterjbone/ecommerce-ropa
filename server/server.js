const express = require("express");
const server = express();
const morgan = require("morgan");

<<<<<<< HEAD
const authRoutes = require("./src/routes/auth.routes");


=======
//? Importando routers
const indexRouter = require("./routes/indexRouter.js");
// const stripeRouter = require("./routes/stripeRouter.js");

//* MIDDLEWARES
server.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});
server.use(morgan("dev"));
>>>>>>> d402e9b1ef6af8e79d2ce9251c18d41763080d95
server.use(express.json());
server.use(morgan("dev"));
server.use('/auth', authRoutes)

//* ROUTES Y ROUTERS
server.use("/", indexRouter);
// server.use("/api/stripe", stripeRouter);

module.exports = server;
