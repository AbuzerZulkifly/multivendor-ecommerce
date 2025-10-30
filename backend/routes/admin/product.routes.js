const express = require("express");
const multer = require('multer')

const {
  handleImageUpload, 
  handleAddNewBrand, 
  handleGetAllBrand,
  handleAddNewProduct, 
  handleGetAllProduct,
  handleEditProduct,
  handleDeleteProduct} = require('../../controllers/admin/products.controller.js')
const {upload, imageUploadUtils} = require('../../helpers/cloudinary.helpers.js')

const router = express.Router();

router.post('/upload_image', upload.single('my_file'), handleImageUpload)
router.post('/brand', handleAddNewBrand)
router.get('/getbrand', handleGetAllBrand)

router.post('/addproduct', handleAddNewProduct)
router.get('/getallproduct', handleGetAllProduct)
router.put('/updateproduct/:id', handleEditProduct)
router.delete('/deleteproduct/:id', handleDeleteProduct)
module.exports = router;