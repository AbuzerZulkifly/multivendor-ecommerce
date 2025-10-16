const express = require('express')
const router = express.Router();
const {authMiddleware} = require('../../middlewares/auth.middleware.js')
const {signup, login, logout} = require('../../controllers/auth/auth.controller.js') 

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)
router.get('/authorised', authMiddleware, (req,res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "User Authenicated",
    user
  })
})

module.exports = router;