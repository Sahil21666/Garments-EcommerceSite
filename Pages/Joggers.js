import products from "./HomeProductCards.js";
import { showProductContainer } from "./HomeProductCards.js";


const category = "Joggers";

products(category).then((res)=>{
  showProductContainer(res)
})