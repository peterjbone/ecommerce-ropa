const Usuario = require('../models/Usuario');

const updateUser = async (req,res) =>{
    const { id } = req.params;
    const { name, apellido, email, telefono, direccion, password } = req.body;
    if (!id) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    try {
        const userFound = await Usuario.findById(id);
        if (!userFound) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        const userUpdated = await Usuario.findByIdAndUpdate(id, {
            name: name || userFound.name,
            apellido: apellido || userFound.apellido,
            email: email || userFound.email,
            telefono: telefono || userFound.telefono,
            direccion: direccion || userFound.direccion,
            password: password || userFound.password,
        }, { new: true });
        res.status(200).json(userUpdated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

module.exports = updateUser