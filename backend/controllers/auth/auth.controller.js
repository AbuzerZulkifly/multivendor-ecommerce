const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const Token = require('../../models/Token');
const sendEmail = require('../../utils/sendEmail');
const crypto = require('crypto');
// Signup controller
const signup = async(req, res) => {

  const { username, email, password} = req.body;
 
  try {
   const hashedPassword = await bcrypt.hash(password, 12)
   const createUser = new User({
    username, 
    email, 
    password: hashedPassword
   })
   
   await createUser.save();
   res.status(200).json({
    message: "User Succesfully Created ",
    success: true,
    userDetails: {
      username: createUser.username,
      email: createUser.email,
      role: createUser.role
    }
   }) 

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
    
  }
}

// Login controller
const login = async(req, res) => {

  try {
    
  } catch (error) {
    
  }
}

module.exports = {signup, login}