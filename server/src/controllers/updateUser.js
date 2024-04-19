const Usuario = require("../models/Usuario.js");

async function updateUser(request, response) {
  try {
    const { id } = request.params;
    const name = request.body;


    console.log(request.body);

    const user = await Usuario.findById(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    user.name = name;
    await user.save();

    response.status(200).json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    console.error(error);
    response.status(500).send({ error, message: 'Error updating search settings in the database' });
  }
}

module.exports = updateUser;
