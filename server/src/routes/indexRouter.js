const { Router } = require("express");

//* Controladores
const getProductsInfo = require("../controllers/getProductsInfo.js");
const getProducts = require("../controllers/getProducts.js");
const getProductById = require("../controllers/getProductById.js");
const postProduct = require("../controllers/postProduct.js");
const removeProduct = require("../controllers/removeProduct.js");
const updateProduct = require("../controllers/updateProduct.js");
const postReview = require("../controllers/postReview.js");
const addProductToCart = require("../controllers/addProductToCart.js");
const getCarrito = require("../controllers/getCarrito.js");
const deleteCarrito = require("../controllers/deletecarrito.js");
const incrementoCarrito = require("../controllers/incrementoCarrito.js");
const decrementoCarrito = require("../controllers/decrementoCarrito.js");
const updateFavorite = require("../controllers/updateFavorites.js");
const getFavorites = require("../controllers/getFavorites.js");
const getUserPurchase = require("../controllers/getUserPurchase.js");

//* Router
const router = Router();

//* Rutas
/* 1) */ router.get("/infoProductos", getProductsInfo);
/* 2) */ router.get("/producto/:id", getProductById);
/* 3) */ router.get("/carrito/:cartToken", getCarrito);
/* 4) */ router.post("/productos", getProducts);
/* 5) */ router.post("/createproduct", postProduct);
/* 6) */ router.post("/agregarCarrito", addProductToCart);
/* 7) */ router.post("/incrementQuantity", incrementoCarrito);
/* 8) */ router.post("/decrementQuantity", decrementoCarrito);
/* 9) */ router.post("/resena", postReview);
/* 10) */ router.put("/updateFavorite", updateFavorite);
/* 11) */ router.post("/getFavorites", getFavorites);
/* 12) */ router.put("/updateProduct/:id", updateProduct);
/* 13) */ router.delete("/removeproduct/:id", removeProduct);
/* 14) */ router.delete("/removeFromCart", deleteCarrito);
/* 15) */ router.get("/lastpurchase", getUserPurchase);

module.exports = router;
