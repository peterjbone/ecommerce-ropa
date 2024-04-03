const bcrypt = require('bcrypt')
const User = require('../models/user.model')
const {createAccesToken} = require('../libs/jwt')

const register = async (req, res) => {
    const {email, username, password} = req.body
    try {
        const passwordHashed = await bcrypt.hash(password, 10)
        const newUser = new User(
            {
                username,
                email,
                password: passwordHashed
            }
        )
        const userSaved = await newUser.save()
        const token = await createAccesToken({id: userSaved._id})
        res.cookie('token', token)    

        res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })

    } catch (error) {
        console.log(error)
    }
}

const login = async (req,res) =>{
    const {email, password} = req.body
    try {
        const userFind = await User.findOne({email})
        if(!userFind) return res.status(400).json({message: "User not found"})
        const matchPassword = await bcrypt.compare(password, userFind.password)
    if(!matchPassword){
        return res.status(400).json({message: "Invalid password"})
    }
    const token = await createAccesToken({id: userFind._id})
    res.cookie('token', token)
    res.status(200).json({
        id: userFind._id,
        username: userFind.username,
        email: userFind.email
    })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {register, login}