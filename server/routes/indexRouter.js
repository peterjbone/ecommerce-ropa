const { Router } = require("express");

//* Controladores
const getProductsInfo = require("../controllers/getProductsInfo.js");
const getProducts = require("../controllers/getProducts.js");
const getProductById = require("../controllers/getProductById.js");
const postProduct = require("../controllers/postProduct.js");
const removeProduct = require("../controllers/removeProduct.js");
const updateProduct = require("../controllers/updateProduct.js");
const addProductToCart = require("../controllers/addProductToCart.js");
const getCarrito = require("../controllers/getCarrito.js");
const deleteCarrito = require("../controllers/deletecarrito.js");
const incrementoCarrito = require("../controllers/incrementoCarrito.js");
const decrementoCarrito = require("../controllers/decrementoCarrito.js");
//* Router
const router = Router();

//* Rutas
router.get("/infoProductos", getProductsInfo);
router.get("/producto/:id", getProductById);
router.get("/carrito/:cartToken", getCarrito);
router.post("/productos", getProducts);
router.post("/createproduct", postProduct);
router.post("/agregarCarrito", addProductToCart);
router.post("/incrementQuantity", incrementoCarrito);
router.post("/decrementQuantity", decrementoCarrito);
router.put("/updateproduct/:id", updateProduct);
router.delete("/removeproduct/:id", removeProduct);
router.delete("/removeFromCart", deleteCarrito);

module.exports = router;
