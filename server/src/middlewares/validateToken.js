const jwt = require('jsonwebtoken')
const TOKEN_SECRET = process.env.TOKEN_SECRET

const authRequired = async (req,res, next) =>{
    const {token} = req.cookies
    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err){
            return res.status(403).json({message: "invalid token"})
        }
        req.user = user
        next()
    })}

module.exports = {authRequired}