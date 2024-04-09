const { Router } = require('express')

const { register, login, getUserById, getPasswordAuth, changeEmail, changePassword, logout, deleteAccount, profile } = require('../controllers/auth.controller.js')
const { authRequired } = require('../middlewares/validateToken.js')
const router = Router()

router.get('/logout', logout); // De no estar acá arriba por jerarquía no funciona, tal vez habría q hacerlo post

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUserById);
router.post('/reauthenticate', getPasswordAuth);
router.post('/changeEmail', changeEmail);
router.post('/changePassword', changePassword);
router.get('/profile', authRequired, profile);
router.delete('/delete', deleteAccount);

module.exports = router