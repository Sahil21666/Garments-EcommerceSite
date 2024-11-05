import products from "./HomeProductCards.js";
import { showProductContainer } from "./HomeProductCards.js";


const category = "Accesories";

products(category).then((res)=>{
  showProductContainer(res)
})