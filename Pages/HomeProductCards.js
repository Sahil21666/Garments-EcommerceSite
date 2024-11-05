import { addToCart } from "../AddtoCart/addToCart.js";
import homeQuantityToggle from "./homeQuantityToggle.js"

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

console.log(productContainer);


export default async function products(product) {
  const api = await fetch("https://garment-api-mxq7-sahil21666s-projects.vercel.app/api/products")

  const res = await api.json()

  let myres;
  // console.log(res);

  switch (product) {
    case "Leggings": myres = res.mydata[0].Leggings;
      break;
    case "Jeggings": myres = res.mydata[0].Jeggings;
      break;
    case "Fashion_Wear": myres = res.mydata[0].Fashion_Wear;
      break;
      case "Inner_Wear": myres = res.mydata[0].Inner_Wear;
      break;
      case "Active_Wear": myres = res.mydata[0].Active_Wear;
      break;
      case "Accesories": myres = res.mydata[0].Accesories;
      break;
      case "Blouse": myres = res.mydata[0].Blouse;
      break;
      case "Bermudas": myres = res.mydata[0].Bermudas;
      break;
      case "Capri": myres = res.mydata[0].Capri;
      break;
      case "Track_Pant": myres = res.mydata[0].Track_Pant;
      break;
      case "Track_pant_slim_fit": myres = res.mydata[0].Track_pant_slim_fit;
      break;
      case "Joggers": myres = res.mydata[0].Joggers;
      break;
      case "new_arrival": myres = res.mydata[0].new_arrival;
      break;
      case "best_seller": myres = res.mydata[0].best_seller;
      break;

    default:
      break;
  }

  // console.log(res.mydata[0].Leggings);

  // console.log(myres);

  return myres;
}

export const showProductContainer = (
  products

) => {
  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    console.log(curProd);

    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".cards").setAttribute("data-price", `${price}`)

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image.main;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `Rs.${price}`;
    productClone.querySelector(".productActualPrice").textContent = `Rs.${price * 4
      }`;

    productClone
      .querySelector(".productImage")
      .addEventListener("click", (event) => {
        localStorage.setItem("data", JSON.stringify({ name, price, image }));
        window.location.href = `/${category}/:${name}`;
      })

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });



    productContainer.append(productClone);
  });
};

// products("Leggings").then((res)=>{
//   showProductContainer(res)
// })

