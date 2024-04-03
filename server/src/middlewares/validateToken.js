const jwt = require('jsonwebtoken')
const TOKEN_SECRET = require(proccess.env.TOKEN_SECRET)
const authRequired = async (req,res) =>{
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