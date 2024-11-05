import products from "./HomeProductCards.js";
import { showProductContainer } from "./HomeProductCards.js";


const category = "Blouse"

products(category).then((res)=>{
  showProductContainer(res)
})