const Compra = require("../models/Compra");

const getAllCompras = async (req, res) =>{
    try {
        const compras = await Compra.find()
        res.json(compras)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = getAllCompras