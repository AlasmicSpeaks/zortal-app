const express = require("express");
const router = express.Router();
const userController = require("./userController");
const { verifyToken } = require("./userAuth");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/profile/:id", verifyToken, userController.getProfile);

module.exports = router;
