const user = require("../Auth/connectToDB")

async function handleSignUp (req ,res){   
  // console.log(req.body);
  
  const {name,email,password} = await req.body;
 if(!user){ 
    res.render("this is not a valid credentials")
  }
        user.create({
          name,
          email,
          password
        });
         const users = await user.find({})
         console.log(users);
         
        // res.send(data)
        res.redirect("/login");
}

module.exports = {handleSignUp};