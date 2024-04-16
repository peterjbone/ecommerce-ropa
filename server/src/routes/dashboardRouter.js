const {Router} = require('express')

const router = Router()

//Importaciones
const getAllUsers = require('../controllers/getAllUsers')
const getAllCompras = require('../controllers/getAllCompras')
const updateUsers = require('../controllers/updateUsers')
const logicalErased = require('../controllers/deleteUser')
const postProduct = require('../controllers/postProduct')
const removeProduct = require('../controllers/removeProduct')
const updateProduct = require('../controllers/updateProduct')


//Obtener todos los usuarios

router.get('/users', getAllUsers)
router.get('/compras', getAllCompras)
router.put('/updateUser', updateUsers)
router.put('/deleteUser', logicalErased)
router.post('/postProduct', postProduct)
router.delete('/removeProduct', removeProduct)
router.put('/updateProduct', updateProduct)

module.exports = router