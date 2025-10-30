const { verify } = require('jsonwebtoken');
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  image: [String],
  title: String,
  keyword: String,
  description: String,
  category: String,
  brand: String,
  condition: String,
  price: Number,
  discount_price: Number,
  stock: Number,
  minimum_purchase:Number
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;