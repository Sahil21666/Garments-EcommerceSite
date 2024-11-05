import products from "./Pages/HomeProductCards.js";
import { getCartProductFromLS } from "./AddtoCart/getCartProducts.js";
import { updateCartValue } from "./AddtoCart/updateCartValue.js";
  //for switch content  bestseller and new arrival

  //showing the cartproducts Length
  const cartval = document.querySelectorAll("#cartValue");

  let str = document.cookie
  let res = str.split("uid=")
  // console.log(res[1]); 
  const cookie =res[1];

  const login = document.getElementById("login")
  const signup = document.getElementById("signup")
  const profile = document.getElementById("profile")
  

  if(cookie){
    
    profile.style.display = "block"
    login.style.display = "none"
    signup.style.display = "none"
  }else{
    profile.style.display = "none"
  login.style.display = "block"
    signup.style.display = "block"
   
  }

  const cartproducts = getCartProductFromLS();
  cartval.forEach((ele)=>{
    ele.innerHTML =` <i class="fa-solid fa-cart-shopping"> ${cartproducts.length} </i>`;
  })
 

 products("best_seller").then((res)=>{
  showProductContainer2(res)
 })

 products("new_arrival").then((res)=>{
  showProductContainer1(res)
 })

  var newarrival = document.getElementById("new-arrival")
  var bestseller = document.getElementById("bestseller")

 const ProductTemplate1 = document.querySelector("#Product-template1");
 const ProductTemplate2 = document.querySelector("#Product-template2");

 

const showProductContainer1 = (products)=>{
      

      products.forEach((product) => {
      
        const{id,name,price,image} = product;

        const ProductClone1 = document.importNode(ProductTemplate1.content,true)
     

        ProductClone1.querySelector(".productname").textContent= name
        ProductClone1.querySelector(".productprice").textContent=  `Rs.${price}`
        ProductClone1.querySelector(".productimage").src= image.main

        
        //setting id for each card dynamically
        ProductClone1.querySelector("#cardValue1").setAttribute("id",`id${id}`)
       

        newarrival.append(ProductClone1)
      });
}
const showProductContainer2 = (products)=>{
      

  products.forEach((product) => {
  
    const{id,name,price,image} = product;

    const ProductClone2 = document.importNode(ProductTemplate2.content,true)

    ProductClone2.querySelector(".productname").textContent= name
    ProductClone2.querySelector(".productprice").textContent=  `Rs.₹${price}`
    ProductClone2.querySelector(".productimage").src= image.main
   
    //setting id for each card dynamically
    ProductClone2.querySelector("#cardValue2").setAttribute("id",`id${id}`)

    bestseller.append(ProductClone2)
  });
}

