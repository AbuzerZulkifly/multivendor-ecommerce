const { JsonWebTokenError } = require("jsonwebtoken")
const jwt = require('jsonwebtoken');

exports.authMiddleware = (req, res, next) => {
  const token = req.cookies.token
  
  if(!token){ 
    return res.status(401).json({
      success: false,
      message: "Unauthorized User"
  })}

  try {
    const decoded = jwt.verify(token, 'process.env.JWT_SECRET')
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized User"
  })
  }
}