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
  
    const checkIfUserExists = await User.findOne({email})
    
    checkIfUserExists && res.json({
      message: "This email already exists, please enter another email or login with the existing account",
      success: false,
    })

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
    user: {
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
 
  const {email, password} = req.body
  try {
    if(!email || !password) {
      res.status(400).json({
        success: false,
        message: "Please Enter Email and Password"
      })
    }
    
    const ifUserExists = await User.findOne({email})
    !ifUserExists && res.json({
      message: "User with this email does not exist, please signup first",
      success: false,
    })

    const isPasswordCorrect = await bcrypt.compare(password, ifUserExists.password)
    
    !isPasswordCorrect && res.json({
      message: "Incorrect Email or Password",
      success: false,
    })

    const token = jwt.sign({
      id: ifUserExists._id,
      role: ifUserExists.role,
      username: ifUserExists.username,
      email: ifUserExists.email
    }, "process.env.JWT_SECRET", {expiresIn: '6d'})
    
    res.cookie('token', token, {httpOnly: true, secure: false}).json({
      success: true,
      message: "User Logged In Successfully",
      user: {
        id: ifUserExists._id,
        username: ifUserExists.username,
        email: ifUserExists.email,
        role: ifUserExists.role
      }
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false ,message: 'Server Error', error: error.message });
  }
}

const logout = (req, res) => {
  res.clearCookie('token').json({
    success: true,
    message: "User Logged Out"
  })
} 

module.exports = {signup, login, logout}