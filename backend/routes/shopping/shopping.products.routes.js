const express = require("express");

const {getFilteredProducts} = require('../../controllers/shopping/shopping.products.controller.js')

const router = express.Router();


router.get('/getallfilteredproduct', getFilteredProducts)
module.exports = router;