const express = require("express");
const router = express.Router();
const { login } = require("../../controller/users/userController");

router.get("/login", login);

module.exports = router;
