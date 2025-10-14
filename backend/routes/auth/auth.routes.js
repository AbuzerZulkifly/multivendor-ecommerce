const express = require('express')
const router = express.Router();

const {signup} = require('../../controllers/auth/auth.controller.js') 

router.post('/signup', signup)

module.exports = router;