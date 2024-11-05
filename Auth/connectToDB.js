const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Sahil21666:sahil123@igmarment.5fmfqul.mongodb.net/?retryWrites=true&w=majority&appName=iGmarment")
    .then(() => console.log("connection succesfull"))
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})


const user = mongoose.model("user",userSchema);

module.exports = user;


