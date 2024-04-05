const express = require("express");
const server = express();
const morgan = require("morgan");
const cookieParser = require('cookie-parser')	

//? Importando routers
const indexRouter = require("./src/routes/indexRouter.js");
const authRouter = require('./src/routes/authRouter.js')
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
server.use(express.json());
server.use(morgan("dev"));
server.use(cookieParser())
//* ROUTES Y ROUTERS
server.use("/", indexRouter);
server.use('/auth', authRouter)
// server.use("/api/stripe", stripeRouter);

module.exports = server;
