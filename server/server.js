const express = require("express");
const server = express();
const morgan = require("morgan");

const authRoutes = require("./src/routes/auth.routes");


server.use(express.json());
server.use(morgan("dev"));
server.use('/auth', authRoutes)

module.exports = server;
