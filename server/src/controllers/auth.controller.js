const bcrypt = require("bcrypt");
const Usuario = require("../models/Usuario");
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
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFind = await Usuario.findOne({ email });
    if (!userFind) return res.status(400).json({ message: "User not found" });

    const matchPassword = await bcrypt.compare(password, userFind.password);

    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = await createAccesToken({ id: userFind._id });

    res.cookie("token", token);
    res.status(200).json({
      id: userFind._id,
      username: userFind.username,
      email: userFind.email,
      createdAt: userFind.createdAt,
      updateAt: userFind.updateAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = async (req,res) =>{
    res.cookie('token', '',{
        expires: new Date(0),
    })
    return res.sendStatus(200)
}

const profile = async (req,res) =>{
    const user = await Usuario.findById(req.userId)
    if(!user) return res.status(404).json({message: 'User not found'})
    return res.json({
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updateAt: user.updateAt
    
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



module.exports = { register, login, deleteAccount, logout, profile };
