require("dotenv").config();
const Usuario = require("../models/Usuario");
const Compra = require("../models/Compra");
const Resena = require("../models/Resena");
const TOKEN_SECRET = process.env.TOKEN_SECRET
const { createAccessToken } = require("../libs/jwt");
const mailTo = require("../mailer/mailTo.js");
const auth = require("../firebase/firebaseConfig.js");
const Cookies = require("universal-cookie");
const cookies = new Cookies();
const jwt = require('jsonwebtoken');
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
  signOut,
} = require("firebase/auth");

const restoreSession = (request, response) => {
  try {
    const storedUser = cookies.get("firebaseUser");
    if (!storedUser) {
      return response
        .status(404)
        .json({ message: "Cookie de usuario no encontrada" });
    }
    const user = storedUser; // No es necesario utilizar JSON.parse()
    auth.currentUser = user;
    response.status(200).json({ message: "Sesión restaurada correctamente" });
  } catch (error) {
    console.error(error);
    response.status(500).send(error);
  }
}

const isAdmin = async (request, response, next) => {
  const token = request.cookies.token
  if (!token) return response.status(401).json({ message: "No hay token" })

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return response.status(400).json({ message: "Token inválido" })
    }

    if (decoded && decoded.role === 'admin') {
      request.usuario = decoded
      next()
    } else {
      return response.status(403).json({ message: "No tienes permisos para realizar esta acción" })
    }
  })
}

const register = async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const newUser = new Usuario({
      name,
      email,
      password,
      role: "user"
    });
    await newUser.save();
    // const token = jwt.sign({ email: newUser.email, id: newUser._id, role: newUser.role }, process.env.TOKEN_SECRET, { expiresIn: "1h" })
    // response.cookie("token", token)

    response.status(201).json({ message: "Nuevo usuario creado exitosamente" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: "Error registrando usuario" });
  }
};

const login = async (request, response) => {
  try {
    const { email, password, isAuto } = request.body;
    let foundUser;
    if (isAuto) {
      const user = auth.currentUser;
      if (!user) {
        return response
          .status(401)
          .json({ message: "No hay ningún usuario ingresado" });
      }
      const { email } = user;
      foundUser = await Usuario.findOne({ email });
    } else {
      foundUser = await Usuario.findOne({ email });
    }
    if (!foundUser) {
      return response.status(400).json({ message: "El usuario no existe en base de datos" });
    }
    if (!isAuto) {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
    }

    const purchases = await Compra.find({ userId: foundUser._id });
    const reviews = await Resena.find({ usuario_id: foundUser._id });

    const user = await new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            cookies.set("firebaseUser", user, { path: "/" }); // No es necesario utilizar JSON.stringify()
          }
          resolve(user);
          unsubscribe(); // Detener la escucha del cambio de estado una vez obtenido el usuario
        },
        reject
      );
    });

    // const token = jwt.sign({ email: foundUser.email, id: foundUser._id, role: foundUser.role }, process.env.TOKEN_SECRET, { expiresIn: "1h" })
    // response.cookie("token", token)

    return response.status(200).json({ foundUser, purchases, reviews });
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ error, message: "Error ingresando en firebase" });
  }
};

const getPasswordAuth = async (request, response) => {
  try {
    const { password } = request.body;
    const user = auth.currentUser;
    if (!user) {
      return response
        .status(401)
        .json({ message: "No hay ningún usuario ingresado" });
    }
    const { email } = user;
    if (!email) {
      return response.status(400).json({ message: "Email de usario inválido" });
    }
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(auth.currentUser, credential);
    response.status(204).send();
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .send({ error, message: "Error reautenticando usuario" });
  }
};

const changeEmail = async (request, response) => {
  try {
    const { newEmail, password } = request.body;
    const user = auth.currentUser;
    if (!user) {
      return response
        .status(401)
        .json({ message: "No hay ningún usuario ingresado" });
    }
    const { email } = user;
    if (!email) {
      return response.status(400).json({ message: "Email de usario inválido" });
    }
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(user, credential);
    await updateEmail(user, newEmail);
    response.status(200).json({ message: "Email cambiado correctamante" });
  } catch (error) {
    console.error(error);
    response.status(500).send({ error, message: "Error cambiando Email" });
  }
};

const changePassword = async (request, response) => {
  try {
    const { currentPassword, newPassword } = request.body;
    const user = auth.currentUser;
    if (!user) {
      return response
        .status(401)
        .json({ message: "No hay ningún usuario ingresado" });
    }
    const { email } = user;
    if (!email) {
      return response.status(400).json({ message: "Email de usario inválido" });
    }
    const credential = EmailAuthProvider.credential(email, currentPassword);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
    const userData = await Usuario.findOne({ email: user.email });

    const emailInfo = {
      name: userData ? userData.name || "Usuario" : "Usuario",
      email: user.email,
      subject: "Cambio de Contraseña Exitoso",
      html: `Tu contraseña ha sido cambiada exitosamente.  Ahora puedes iniciar sesión en tu cuenta con tu nueva contraseña.`,
      link: "http://localhost:5173/login",
    };

    const emailResponse = await mailTo(emailInfo);
    if (!emailResponse.messageId) {
      console.error("Error al enviar correo electrónico de notificación");
    } else {
      console.log("Email sent successfully");
    }
    response.status(200).json({ message: "Contraseña cambiado correctamante" });
  } catch (error) {
    console.error(error);
    response.status(500).send({ error, message: "Error cambiando contraseña" });
  }
};

const logout = async (request, response) => {
  try {
    response.cookie("token", "", {
      expires: new Date(0)
    });
    await signOut(auth);
    response.status(200).json({ message: "Sesión cerrada correctamente" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error, message: "Error cerrando sesión" });
  }
};

const deleteAccount = async (request, response) => {
  try {
    const { id } = request.body;
    const user = auth.currentUser;
    if (user) {
      await user.delete();
      await Usuario.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ message: "Usuario borrado exitosamente" });
    } else {
      return response
        .status(401)
        .json({ message: "No hay ningún usuario ingresado" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).send({ error, message: "Error borrando usuario" });
  }
};
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    await sendPasswordResetEmail(auth, email);
    return res.status(200).json({
      message: "Correo electrónico de restablecimiento de contraseña enviado.",
    });
  } catch (error) {
    console.error(
      "Error al enviar el correo electrónico de restablecimiento de contraseña:",
      error
    );
    return res.status(500).json({
      error:
        "Error al enviar el correo electrónico de restablecimiento de contraseña",
    });
  }
};
module.exports = {
  register,
  login,
  restoreSession,
  getPasswordAuth,
  changeEmail,
  changePassword,
  logout,
  deleteAccount,
  forgotPassword,
  isAdmin
};
