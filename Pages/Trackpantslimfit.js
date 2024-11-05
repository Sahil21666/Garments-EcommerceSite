import products from "./HomeProductCards.js";
import { showProductContainer } from "./HomeProductCards.js";


const category = "Track_pant_slim_fit";

products(category).then((res)=>{
  showProductContainer(res)
})