const express = require("express");
const router = express.Router();
const {
   login,
   register,
   refreshToken,
} = require("../../controller/users/userController");

router.get("/login", login);
router.post("/register", register);
router.post("/refresh", refreshToken);

module.exports = router;
