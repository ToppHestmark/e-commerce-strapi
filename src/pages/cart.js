import { productsUrl } from "../settings/apis.js";
import { getExistingCart } from "../utils/storage.js";

const cartContainer = document.querySelector(".cart__container");

const cartPage = async () => {
  const products = await (await fetch(productsUrl)).json();

  const cartItemsArrayId = getExistingCart();
  const productsIdInt = cartItemsArrayId.map((el) => parseInt(el));
};
cartPage();
