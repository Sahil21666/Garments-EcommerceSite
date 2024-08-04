const { log, Console } = require("console");
const express = require("express");
const app = express();
const port = 3000;
const product_routes = require("./router/products")
const conectDB = require("./connect")

app.get('/',(req,res)=>{
    res.send("Hi, iam Live now")
})
//middleware
conectDB();
app.use("/api/products",product_routes);

app.listen(port, () => {
    console.log(`your server is live at http://localhost:${port} `)
})