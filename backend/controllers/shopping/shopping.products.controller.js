const Product = require("../../models/Product.js")

const getFilteredProducts = async(req, res) => {

  try {
    
      const getFilteredProducts = await Product.find({})

      res.status(200).json({
        message: "Successfully Retrived Products",
        success: true,
        data: getFilteredProducts
      })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
      success: false
    })
    
  }
}

module.exports = {getFilteredProducts}