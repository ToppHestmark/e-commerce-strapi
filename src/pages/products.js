import { productsUrl } from "../settings/apis.js";
import {
  searchBox,
  showProducts,
  displayMessage,
} from "../components/index.js";

const loadingContainer = document.querySelector(".loading");

const productsPageHtml = async () => {
  try {
    const products = await (await fetch(productsUrl)).json();

    if (products) {
      loadingContainer.style.display = "none";
    }

    showProducts(products);
    searchBox(products);
  } catch (error) {
    displayMessage(
      "error",
      "Ooops, and error occured when connection to the server.",
      ".message-container"
    );
  } finally {
    loadingContainer.style.display = "none";
  }
};
productsPageHtml();
