const { verify } = require('jsonwebtoken');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,

  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
  },

  password: {
    type: String,
    required: true,
    minLength: 6,
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },

  verifyed: {
    type: Boolean,
    default: false
  },

})

const User = mongoose.model('User', userSchema);

module.exports = User;