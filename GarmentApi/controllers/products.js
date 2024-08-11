const Product = require("../connect");

const getAllProducts =  async (req, res)=>{
    res.status(200).json(await Product.find())
};

module.exports = getAllProducts;
