import { productsUrl } from "../settings/apis.js";
import { getExistingCart } from "../utils/storage.js";
import { showTotalPrice, showCartItems } from "../components/index.js";

const cartHeaderContainer = document.querySelector(".cart__header");
const loadingContainer = document.querySelector(".loading");

const cartPage = async () => {
  try {
    const products = await (await fetch(productsUrl)).json();

    if (products) {
      loadingContainer.style.display = "none";
      cartHeaderContainer.style.display = "block";
    }

    const cartItemsArray = getExistingCart();
    const cartIds = cartItemsArray.map((el) => parseInt(el.id));

    showCartItems(products, cartIds);
    showTotalPrice(products, cartIds);
  } catch (error) {
    console.log(error);
  }
};
cartPage();
