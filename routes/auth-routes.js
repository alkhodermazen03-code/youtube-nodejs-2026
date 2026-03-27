const express = require('express');
const {
  registerUser, 
  loginUser, 
  changePassword,
} = require("../controllers/auth-controller");
const router = express.Router();
const authMiddleware = require('../middleware/auth-middleware');


//all rooutes are relatd to auth 
router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/change-password", authMiddleware, changePassword);

module.exports = router;