const user = require("../Auth/connectToDB")
const {getuser,setuser} = require("../AuthService/Authfunction")


 async function handleLogin(req,res) {

    try {

        const {email,password} = req.body;
        const isUser = await user.findOne({email,password})
        // console.log(isUser);

        if(!isUser){
            //  res.render(express.static("LoginPage"),{error: "Invalid Login id or password"})
            console.log("user not found");
            res.redirect("/login")
            
        }

      const token = setuser(isUser);
       
       res.cookie("uid",token)

       return  res.redirect("/profile") 

    } catch (error) {
        res.render(error)
    }
   
}

module.exports ={ handleLogin};