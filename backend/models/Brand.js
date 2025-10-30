const { verify } = require('jsonwebtoken');
const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema({
 image: String,
 name:  String,
})

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;