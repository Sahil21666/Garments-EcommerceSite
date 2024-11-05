import products from "./HomeProductCards.js";
import { showProductContainer } from "./HomeProductCards.js";


const category = "Capri";

products(category).then((res)=>{
  showProductContainer(res)
})