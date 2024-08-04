const Product = require("../connect");

const getAllProducts =  async (req, res)=>{
    const mydata = await Product.find();
    res.status(200).json({mydata})
};

module.exports = getAllProducts;
