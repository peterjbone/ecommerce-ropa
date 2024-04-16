const { Router } = require("express");

const {
  register,
  login,
  restoreSession,
  getUserChange,
  getPasswordAuth,
  changeEmail,
  changePassword,
  logout,
  deleteAccount,
  forgotPassword,
} = require("../controllers/auth.controller.js");
const { authRequired } = require("../middlewares/validateToken.js");
const router = Router();

router.get("/logout", logout); // De no estar acá arriba por jerarquía no funciona, tal vez habría q hacerlo post

router.post("/register", register);
router.post("/login", login);
router.get("/restore", restoreSession);
router.post("/reauthenticate", getPasswordAuth);
router.post("/changeEmail", changeEmail);
router.post("/changePassword", changePassword);
router.delete("/delete", deleteAccount);
router.post("/forgot-password", forgotPassword);

module.exports = router;
