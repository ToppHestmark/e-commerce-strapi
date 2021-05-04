import { productsUrl } from "../settings/apis.js";
import { getExistingCart } from "../utils/storage.js";
import {
  createNavbar,
  createFooter,
  showTotalPrice,
  showCartItems,
  displayMessage,
} from "../components/index.js";

createNavbar();
createFooter();

const cartHeaderContainer = document.querySelector(".cart__header");
const loadingContainer = document.querySelector(".loading");

const cartPageHtml = async () => {
  try {
    const products = await (await fetch(productsUrl)).json();

    if (products) {
      cartHeaderContainer.style.display = "block";
      loadingContainer.style.display = "none";
    }

    const cartItemsArray = getExistingCart();
    const cartIds = cartItemsArray.map((el) => parseInt(el.id));

    showCartItems(products, cartIds);
    showTotalPrice(products, cartIds);
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Ooops, An error occured when connecting to server.",
      ".message-container"
    );
  } finally {
    loadingContainer.style.display = "none";
  }
};
cartPageHtml();
