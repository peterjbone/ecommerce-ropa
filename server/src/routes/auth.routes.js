const {Router} = require('express')
const router = Router()

const {register,login} = require('../controllers/auth.controller')
const {validateSchema} = require('../middlewares/validator.middleware')
const {registerSchema, loginSchema} = require('../schemas/auth.schema')

router.post('/register', validateSchema(registerSchema),register)
router.post('/login', login)

module.exports = router