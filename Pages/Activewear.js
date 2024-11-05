import products from "./HomeProductCards.js";
import { showProductContainer } from "./HomeProductCards.js";


const category = "Active_Wear";

products(category).then((res)=>{
  showProductContainer(res)
})