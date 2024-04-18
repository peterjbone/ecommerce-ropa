const Usuario = require('../models/Usuario');

const getAllUsers = async (req,res) =>{
    try {
        const users = await Usuario.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
} 

module.exports = getAllUsers