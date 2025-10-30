const {upload, imageUploadUtils } = require("../../helpers/cloudinary.helpers.js");
const Brand = require("../../models/Brand.js")
const Product = require("../../models/Product.js")

const handleImageUpload = async(req, res) => {
try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const result = await imageUploadUtils(file.buffer);
    return res.status(200).json({
      success: true,
      results: { url: result.secure_url },
    });
  } catch (error) {
    console.error("Upload failed:", error);
    return res.status(500).json({ success: false, message: "Upload failed" });
  }
}

const handleAddNewBrand = async(req,res) => {
 
  try {
    const {image  , name} = req.body
    
    const checkIfBrandExists = await Brand.findOne({name})

    if (checkIfBrandExists){ 
      
      return res.status(501).json({
      message: "This Brand Name Already Exists",
      success: false
    })}

    const createNewBrand = new Brand({
      image,
      name

    })

    await createNewBrand.save();
    return res.status(200).json({
      message: "Brand Successfully Created",
      success: true,
      data: createNewBrand
    })
  } catch (error) {
     console.log(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
    
  }
}

const handleGetAllBrand = async(req, res) => {
  try {
    const getAllBrandNames = await Brand.find({})
    res.json(getAllBrandNames)
  } catch (error) {
    res.status(500).json({message: "Oops something went wrong"})
  }
}

// Add Products
const handleAddNewProduct = async(req,res) => {
  try {
    
    const {
      image = [],
      title,
      description,
      keyword,
      category,
      brand,
      condition,
      price,
      discount_price,
      stock,
      minimum_purchase} = req.body
    
    const addNewProduct = new Product({
      image ,
      title,
      description,
      keyword,
      category,
      brand,
      condition,
      price,
      discount_price,
      stock,
      minimum_purchase
    })

    await addNewProduct.save();
    res.status(201).json({
      success: true,
      message: "Product Has Been Added Succesfully",
      data: addNewProduct
    })
  } 
  catch (error) {
     res.status(500).json({message: "Oops something went wrong, Could Not Create Product", success: false})
  }
}


const handleGetAllProduct = async(req,res) => {
  try {
    
    const productList = await Product.find({})
    res.status(200).json({
      message: true,
      data: productList
    })

  } catch (error) {
     res.status(500).json({message: "Oops something went wrong, Could Not Fetch Product", success: false})
  }
}


const handleEditProduct = async(req,res) => {

  try {
    
    const {id} = req.params
        
    const {
      image,
      title,
      description,
      keyword,
      category,
      brand,
      condition,
      price,
      discount_price,
      stock,
      minimum_purchase} = req.body

      const findProduct = await Product.findById(id)
      !findProduct && res.status(404).json({
        message: "Product Cannot Be Found",
        success: false
      })
      
      findProduct.title = title || findProduct.title
      findProduct.image = image || findProduct.image
      findProduct.keyword = keyword || findProduct.keyword
      findProduct.description = description || findProduct.description
      findProduct.category = category || findProduct.category
      findProduct.brand = brand || findProduct.brand
      findProduct.condition = condition || findProduct.condition
      findProduct.price = price || findProduct.price
      findProduct.discount_price = discount_price || findProduct.discount_price
      findProduct.stock = stock || findProduct.stock
      findProduct.minimum_purchase = minimum_purchase || findProduct.minimum_purchase

      await findProduct.save();
      res.status(200).json({
        message: "Product Details are Updated",
        success: true,
        data: findProduct

      })
  } catch (error) {
       res.status(500).json({message: "Oops something went wrong, Could Not Edit Product", success: false})
  
  }
}


const handleDeleteProduct = async(req,res) => {

  try {
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id)
    
    !product && res.status(404).json({
      success: false,
      message: "Product Does Not Exist"
    })

    res.status(200).json({
      success: true,
      message: "Product Successfully Deleted"
    })
  } catch (error) {
       res.status(500).json({message: "Oops something went wrong, Could Not Delete Product", success: false})
    
  }
}

module.exports = {
  handleImageUpload, 
  handleAddNewBrand, 
  handleGetAllBrand, 
  handleAddNewProduct, 
  handleGetAllProduct,
  handleEditProduct,
  handleDeleteProduct
}