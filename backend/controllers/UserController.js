const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET


// Generate the user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "9d",
  });
};


// Register user and sign in
const register = async (req, res) => {
  res.send("User Registration test")
}


// export - component
module.exports = {
  register,

}