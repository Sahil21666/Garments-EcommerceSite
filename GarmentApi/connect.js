const mongoose = require("mongoose")
require("dotenv").config();

const connectDB = async() => {
    try{
         console.log(process.env.MONGODB_URI)
    return await mongoose.connect(
        process.env.MONGODB_URI
        
    )
    console.log("success");
    

}catch(err){
    console.log(err);
    
    
}
}
connectDB();
const productschema = mongoose.Schema({
    product_name: String,
    product_image: {
        main: String,
        back: String,
        side_view_1: String,
        side_view_2: String
    },
    product_rating : Number,
    product_price: Number,
    product_type: String
})

module.exports = connectDB;
module.exports = mongoose.model("Product",productschema);
