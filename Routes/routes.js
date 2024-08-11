const express = require("express")
const app = express();
const router = express.Router();

router.get("/Leggings",(req,res)=>{
   res.sendFile("../Pages/Leggings.html")
})

module.exports = router


