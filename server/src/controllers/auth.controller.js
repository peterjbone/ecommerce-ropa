const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");
const Compra = require("../models/Compra");
const Resena = require("../models/Resena");
const { createAccesToken } = require("../libs/jwt");

const register = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const passwordHashed = await bcrypt.hash(password, 10);
    const newUser = new Usuario({
      name,
      email,
      password: passwordHashed,
    });
    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });
    res.cookie("token", token);

    res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({error:error.message})
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await Usuario.findOne({ email });
    if (!foundUser) return res.status(400).json({ message: "User not found" });

    const matchPassword = await bcrypt.compare(password, foundUser.password);

    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = await createAccesToken({ id: foundUser._id });

    res.cookie("token", token);
    // res.status(200).json({
    //   id: foundUser._id,
    //   username: foundUser.username,
    //   email: foundUser.email,
    //   token: token,
    //   createdAt: foundUser.createdAt,
    //   updateAt: foundUser.updateAt,
    // });
    const purchases = await Compra.find({ userId: foundUser._id });
    const reviews = await Resena.find({ usuario_id: foundUser._id });

    foundUser.purchases = purchases || [];
    foundUser.reviews = reviews || [];

    res.status(200).json({ foundUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req,res) =>{
  const {id} = req.params
  if (!id) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }
  try{
  const userFound = await Usuario.findById(id)
  res.status(200).json(userFound)
  }catch(err) {
    res.status(500).json({message : err.message})
  }
}

const logout = async (req,res) =>{
    res.cookie('token', '',{
        expires: new Date(0),
    })
    return res.sendStatus(200)
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

const deleteAccount = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await Usuario.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  register,
  login,
  logout,
  profile,
  deleteAccount,
  getUserById
}