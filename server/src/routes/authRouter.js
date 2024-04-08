const { Router } = require('express')

const { register, login, getUserById, getPasswordAuth, changeEmail, changePassword, logout, deleteAccount, profile } = require('../controllers/auth.controller.js')
const { authRequired } = require('../middlewares/validateToken.js')
const router = Router()

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUserById);
router.post('/reauthenticate', getPasswordAuth);
router.post('/changeEmail', changeEmail);
router.post('/changePassword', changePassword);
router.get('/logout', logout);
router.delete('/delete/:id', deleteAccount);
router.get('/profile', authRequired, profile);

module.exports = router