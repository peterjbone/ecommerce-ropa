const {Router} = require('express')


const {login, register, deleteAccount, logout, profile} = require('../controllers/auth.controller.js')
const {authRequired} = require('../middlewares/validateToken.js')
const router = Router()

 
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.delete('/delete/:id', deleteAccount)
router.get('/profile', authRequired, profile)

module.exports = router