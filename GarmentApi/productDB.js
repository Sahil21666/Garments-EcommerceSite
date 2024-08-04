const connectDB = require("./connect")
const Product = require("./connect")

const Productjson = require("./garmentApi.json")

const start = async ()=>{
    try{
    await connectDB();
    await Product.create(Productjson);
    console.log("Success");
    }catch(err){
        console.log(err);
        
    }
}
start();