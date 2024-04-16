const Usuario = require('../models/Usuario')

const logicalErased = async (req, res) => {
    try {
        const { id } = req.params
        const user = await Usuario.findByIdAndUpdate(id, { deleted: true }, { new: true })
        res.status(200).json(user)
    } catch (error) {
        console.error('Error al borrar usuario:', error)
        res.status(500).json({ message: 'Hubo un error al borrar el usuario' })
    }
}

module.exports = logicalErased