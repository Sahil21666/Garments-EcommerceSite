import products from "./HomeProductCards.js";
import { showProductContainer } from "./HomeProductCards.js";


const category = "Bermudas";

products(category).then((res)=>{
  showProductContainer(res)
})