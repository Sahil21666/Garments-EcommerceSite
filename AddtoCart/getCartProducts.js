import { updateCartValue } from "./updateCartValue.js";

export const getCartProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);

  //update the cart button value
  updateCartValue(cartProducts);

  return cartProducts;
};