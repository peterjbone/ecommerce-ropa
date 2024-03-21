const { Router } = require("express");

//* Controladores
const getProducts = require("../controllers/getProducts.js");
const getProductById = require("../controllers/getProductById.js");
const postProduct = require("../controllers/postProduct.js");
const removeProduct = require("../controllers/removeProduct.js");
const updateProduct = require("../controllers/updateProduct.js");

//* Router
const router = Router();

//* Rutas
router.get("/productos", getProducts);
router.get("/producto/:id", getProductById);
router.post("/createproduct", postProduct);
router.put("/updateproduct/:id", updateProduct);
router.delete("/removeproduct/:id", removeProduct);

module.exports = router;
