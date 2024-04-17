const {Router} = require('express')

const router = Router()

//Importaciones
const getAllUsers = require('../controllers/getAllUsers')
const getAllCompras = require('../controllers/getAllCompras')
const updateUsers = require('../controllers/updateUsers')
const deleteUser = require('../controllers/deleteUser')
const postProduct = require('../controllers/postProduct')
const removeProduct = require('../controllers/removeProduct')
const updateProduct = require('../controllers/updateProduct')

const {isAdmin} = require('../controllers/auth.controller')

//Obtener todos los usuarios


router.get('/users', isAdmin, getAllUsers)
router.get('/compras', isAdmin, getAllCompras)
router.put('/updateUser/:id', isAdmin, updateUsers)
router.put('/deleteUser/:id',isAdmin, deleteUser)
router.post('/postProduct', isAdmin, postProduct)
router.delete('/removeProduct/:id',isAdmin, removeProduct)
router.put('/updateProduct/:id', isAdmin, updateProduct)

module.exports = router