const Usuario = require('../models/Usuario')

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        if(!id) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }
        const user = await Usuario.findByIdAndUpdate(id, { deleted: true }, { new: true })
        if(!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }
        res.status(200).json({ message: 'Usuario borrado correctamente'})
    } catch (error) {
        console.error('Error al borrar usuario:', error)
        res.status(500).json({ message: 'Hubo un error al borrar el usuario' })
    }
}

module.exports = deleteUser