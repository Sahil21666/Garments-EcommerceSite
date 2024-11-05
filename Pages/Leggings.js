import products from "./HomeProductCards.js";
import { showProductContainer } from "./HomeProductCards.js";


const category = "Leggings";

products(category).then((res)=>{
  showProductContainer(res)
})