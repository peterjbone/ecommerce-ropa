require("dotenv").config();

const jwt = require("jsonwebtoken")
const TOKEN_SECRET = process.env.TOKEN_SECRET
const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            { 
                expiresIn: "1d"
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            })
    })
}

module.exports = { createAccessToken }