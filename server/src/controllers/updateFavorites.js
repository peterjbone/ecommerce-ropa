const Usuario = require("../models/Usuario.js");

const updateFavorite = async (request, response) => {
  try {
    const { userId, productId } = request.body;
    
    const usuario = await Usuario.findById(userId);
    if (!usuario) {
      return response.status(404).send({ message: 'El usuario no existe' });
    }

    const index = usuario.favorites.indexOf(productId);
    if (index === -1) {
      usuario.favorites.push(productId);
    } else {
      usuario.favorites.splice(index, 1);
    }
    await usuario.save();
    response.status(200).json(usuario.favorites);
  } catch (error) {
    console.error(error);
    response.status(500).send({ error, message: 'Error al actualizar favoritos' });
  }
}

module.exports = updateFavorite;