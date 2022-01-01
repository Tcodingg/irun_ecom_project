const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModule");

// login user
const login = async (req, res) => {
   const {
      input: { email, password },
   } = req.body;

   try {
      // check if  the user exists
      const user = await User.findOne({ email: email });
      if (!user) return res.status(400).json("user does not exists");

      // validate the password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(400).json("invalid password");
      const accessToken = jwt.sign(
         { _id: user._id },
         process.env.ACCESS_TOKEN,
         {
            expiresIn: 30,
         }
      );
      const refreshToken = jwt.sign(
         { _id: user._id },
         process.env.REFRESH_TOKEN,
         {
            expiresIn: "30d",
         }
      );
      if (!accessToken) return res.json("no token");
      if (!refreshToken) return res.json("no refreshToken");

      res.json({
         accessToken,
         refreshToken,
         user: {
            email: user.email,
            name: user.name,
            id: user._id,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

module.exports = { login };
