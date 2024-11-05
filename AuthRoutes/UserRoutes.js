const express = require("express")
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
const { handleSignUp } = require("../AuthControllers/handleSignUp");
const {handleLogin} = require("../AuthControllers/handleLogin");
const { restrictLogin } = require("../middlewears/restrictToLogin");
const cookieparser = require("cookie-parser")



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(cookieparser());


app.get("/signup",(req,res)=>{
  res.sendFile(path.join(__dirname,"../Auth/SingUpPage.html"));
})

app.get("/login",(req,res)=>{
  res.sendFile(path.join(__dirname,"../Auth/LoginPage.html"));
})
app.use("/profile",restrictLogin)


app.get("/profile",(req,res)=>{
  console.log(req.user);
  
  res.send("this is profile route and this route is only visible to logged in user")

})

app.post("/user",handleSignUp)
app.post("/user/login",handleLogin)


app.listen(5000,(req,res)=>{
    console.log(`server is live on port  http://localhost:${5000}`);
    
})