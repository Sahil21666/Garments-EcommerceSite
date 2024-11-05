const { getuser } = require("../AuthService/Authfunction");

async function restrictLogin(req, res, next) {

    const userUid = await req.cookies?.uid
    // console.log(userUid);
    
    if(!userUid){
        console.log("user not found");
       return res.redirect("/login")  
    }

    const user =  getuser(userUid,req)

      req.user = user;

     
    next()
    
}
module.exports = {restrictLogin}