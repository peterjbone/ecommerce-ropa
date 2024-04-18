const Usuario = require('../models/Usuario');

const updateUser = async (req,res) =>{

    const { id } = req.params;
    const { name, email, password, deleted } = req.body;
    if (!id) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    try {
        const userFound = await Usuario.findById(id);
        if (!userFound) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
       
        if(req.usuario.role & req.usuario.role === 'admin'){
            const userUpdated = await Usuario.findByIdAndUpdate(id, {
                name: name || userFound.name,
                email: email || userFound.email,
                password: password || userFound.password,
                deleted: deleted || userFound.deleted
            }, { new: true });
            res.status(200).json(userUpdated);
        } else{
            const userUpdated = await Usuario.findByIdAndUpdate(id, {
                name: name || userFound.name,
                email: email || userFound.email,
                password: password || userFound.password,
            }, { new: true });
            res.status(200).json(userUpdated);
        }

       
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
}

module.exports = updateUser