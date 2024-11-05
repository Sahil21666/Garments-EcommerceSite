import products from "./HomeProductCards.js";
import { showProductContainer } from "./HomeProductCards.js";


const category = "Jeggings";

products(category).then((res)=>{
  showProductContainer(res)
})

