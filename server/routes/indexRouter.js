const { Router } = require("express");

//* Controladores
const getProductsInfo = require("../controllers/getProductsInfo.js");
const getProducts = require("../controllers/getProducts.js");
const getProductById = require("../controllers/getProductById.js");
const postProduct = require("../controllers/postProduct.js");
const removeProduct = require("../controllers/removeProduct.js");
const updateProduct = require("../controllers/updateProduct.js");
const postReview = require("../controllers/postReview.js");

//* Router
const router = Router();

//* Rutas
router.get("/infoProductos", getProductsInfo);
router.get("/producto/:id", getProductById);
router.post("/productos", getProducts);
router.post("/createproduct", postProduct);
router.post("/resena", postReview);
router.put("/updateproduct/:id", updateProduct);
router.delete("/removeproduct/:id", removeProduct);

module.exports = router;
