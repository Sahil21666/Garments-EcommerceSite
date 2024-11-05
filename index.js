const express = require("express");
var mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1/SahilCart", { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("connection succesfull"))
//     .catch((err) => console.log(err));
const path = require("path");
const app = express();
const port = 80;


const bodyParser = require('body-parser')
const { handleSignUp } = require("./AuthControllers/handleSignUp");
const {handleLogin} = require("./AuthControllers/handleLogin");
const { restrictLogin } = require("./middlewears/restrictToLogin");
const cookieparser = require("cookie-parser");
const { log } = require("console");
//const url = req.url;

app.use(express.urlencoded())


var contactSchema = new mongoose.Schema({
    name: {
      type :  String,
        required : true
    },
    email:{
        type :  String,
          required : true
      },
    age: {
         type :  Number,
          required : true,
          validate:(age)=>{
              if (age>0 && age<100) {
                return;
              }else{
                throw new error("age is not valid please provide valid age")
              }
          }
      },
    discription:{
        type :  String,
      },
    date: {
        type: Date,
        default: Date.now
    },
    suggession: {
         type :  String,
      },
}
);

var contact = mongoose.model('contact', contactSchema);

app.post("/contact", (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(() => {
        res.end("This item is saved to the Database")
    }).catch((err) => {
        console.log("error" , err)
    })
})
console.log(__dirname);


app.use(express.static(path.join(__dirname)))



    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html")
    })

    app.get("/about", (req, res) => {
        res.sendFile(__dirname + "/about.html")
        // res.end("this is about page")
    })

    app.get("/services", (req, res) => {
        res.sendFile(__dirname + "/services.html")
    })

    app.get("/contact", (req, res) => {
        res.sendFile(__dirname + "/contact.html")
    })
    
    //Product Routes

    app.get('/:productname/:id',(req,res)=>{

      res.sendFile(path.join(__dirname ,"./PurchasePages/new.html"))
    })

    // app.get('/purchase/:id',(req,res)=>{

    //   res.sendFile(path.join(__dirname ,"./Purchase/purchasePage.html"))
    // })

//Auth Routes
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(cookieparser());


app.get("/signup",(req,res)=>{
  res.sendFile(path.join(__dirname,"./Auth/SingUpPage.html"));
})

app.get("/login",(req,res)=>{
  res.sendFile(path.join(__dirname,"./Auth/LoginPage.html"));
})
app.use("/profile",restrictLogin)


app.get("/profile",(req,res)=>{

  // fetchuser(req);

 res.sendFile(path.join(__dirname,"./Profile.html"))

})

app.post("/user",handleSignUp)
app.post("/user/login",handleLogin)




app.listen(port, () => {
    console.log(`your server is live at http://localhost:${port} `)
 })
