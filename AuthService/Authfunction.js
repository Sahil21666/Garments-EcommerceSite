const jwt = require('jsonwebtoken')

const secretKey = "Sahil@21666"

function setuser(user) {
   return  jwt.sign({
       id: user._id,
       name : user.name,
       email: user.email
   },secretKey)
}

function getuser(token) {
    // console.log("Token :",token);
    
    if(!token) return null;

     return jwt.verify(token,secretKey);
}

module.exports = {getuser,setuser}

