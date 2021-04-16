import { getExistingCart, saveToCart } from "../utils/storage.js";

const toggleCart = (event) => {
  event.preventDefault();
  event.target.classList.toggle("fa-cart-arrow-down");
  event.target.classList.toggle("fa-shopping-cart");

  const id = event.target.dataset.id;

  const currentCart = getExistingCart();
  const newItem = currentCart.filter(() => id !== id);
  const itemExist = currentCart.includes(id);

  return !itemExist
    ? currentCart.push(id) & saveToCart(currentCart)
    : saveToCart(newItem);
};

export default toggleCart;
