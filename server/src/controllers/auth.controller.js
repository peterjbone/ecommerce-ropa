const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");
const Compra = require("../models/Compra");
const Resena = require("../models/Resena");
const { createAccessToken } = require("../libs/jwt");
const auth = require("../firebase/firebaseConfig.js");

const { createUserWithEmailAndPassword, signInWithEmailAndPassword, EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword, signOut } = require('firebase/auth');

const register = async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const passwordHashed = await bcrypt.hash(password, 10);

    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const newUser = new Usuario({
      name,
      email,
      password: passwordHashed
    });
    const userSaved = await newUser.save();
    // const token = await createAccessToken({ id: userSaved.id });
    // request.cookie("token", token);

    response.status(201).json({ /* token, */ message: 'Nuevo usuario creado exitosamente' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error, message: 'Error registering user on firebase' });
  }
}
const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const foundUser = await Usuario.findOne({ email });
    if (foundUser) {
      // const matchPassword = await bcrypt.compare(password, foundUser.password);
      // if (matchPassword) {

        // const token = await createAccessToken({ id: foundUser._id });
        // request.cookie("token", token);

        const purchases = await Compra.find({ userId: foundUser._id });
        const reviews = await Resena.find({ usuario_id: foundUser._id });

        return response.status(200).json({ foundUser, purchases, reviews/* , token */ });
      } else {
        return request.status(400).json({ message: 'Contraseña inválida' });
      }
    // } else {
      // return response.status(404).json({ message: 'Usuario no encontrado en base de datos' });
    // }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: 'Error ingresando en firebase' });
  }
}
const getUserById = async (req, res) => {
  // const { id } = req.params;
  // if (!id) {
  //   return res.status(404).json({ message: "Usuario no encontrado" });
  // }
  // try {
  //   const userFound = await Usuario.findById(id);
  //   res.status(200).json(userFound);
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ message: err.message });
  // }
}
const getPasswordAuth = async (request, response) => {
  try {
    const { password } = request.body;
    const user = auth.currentUser;
    if (!user) {
      return response.status(401).json({ message: 'No hay ningún usuario ingresado' });
    }
    const { email } = user;
    if (!email) {
      return response.status(400).json({ message: 'Email de usario inválido' });
    }
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(auth.currentUser, credential);
    response.status(204).send();
  } catch (error) {
    console.error(error);
    response.status(500).send({ error, message: 'Error reautenticando usuario' });
  }
}
const changeEmail = async (request, response) => {
  try {
    const { newEmail, password } = request.body;
    const user = auth.currentUser;
    if (!user) {
      return response.status(401).json({ message: 'No hay ningún usuario ingresado' });
    }
    const { email } = user;
    if (!email) {
      return response.status(400).json({ message: 'Email de usario inválido' });
    }
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(user, credential);
    await updateEmail(user, newEmail);
    response.status(200).json({ message: 'Email cambiado correctamante' });
  } catch (error) {
    console.error(error);
    response.status(500).send({ error, message: 'Error cambiando Email' });
  }
}
const changePassword = async (request, response) => {
  try {
    const { currentPassword, newPassword } = request.body;
    const user = auth.currentUser;
    if (!user) {
      return response.status(401).json({ message: 'No hay ningún usuario ingresado' });
    }
    const { email } = user;
    if (!email) {
      return response.status(400).json({ message: 'Email de usario inválido' });
    }
    const credential = EmailAuthProvider.credential(email, currentPassword);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
    response.status(200).json({ message: 'Contraseña cambiado correctamante' });
  } catch (error) {
    console.error(error);
    response.status(500).send({ error, message: 'Error cambiando contraseña' });
  }
}
const logout = async (request, response) => {
  console.log('here');
  try {
    // request.cookie("token", "", {
    //   expires: new Date(0)
    // });
    await signOut(auth);
    response.status(200).json({ message: 'Sesión cerrada correctamente' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: 'Error cerrando sesión' });
  }
}
const deleteAccount = async (request, response) => {
  try {
    const { id } = request.body;
    const user = auth.currentUser;
    if (user) {
      await user.delete();
      await Usuario.findByIdAndDelete(id);
      return response.status(200).json({ message: 'Usuario borrado exitosamente' });
    } else {
      return response.status(401).json({ message: 'No hay ningún usuario ingresado' });
    }
  } catch (error) {
    console.error(error);
    response.status(500).send({ error, message: 'Error borrando usuario' });
  }
}
const profile = async (req,res) =>{
  const user = await Usuario.findById(req.user.id)
  if(!user) return res.status(404).json({message: 'User not found'})
  return res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updateAt: user.updateAt,
      profile: "this is the profile of the user"
  
  })
}

module.exports = {
  register,
  login,
  getUserById,
  getPasswordAuth,
  changeEmail,
  changePassword,
  logout,
  deleteAccount,
  profile,
};
