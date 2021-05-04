import { productsUrl } from "../settings/apis.js";
import {
  createNavbar,
  createFooter,
  searchBox,
  showProducts,
  displayMessage,
} from "../components/index.js";

createNavbar();
createFooter();

const loadingContainer = document.querySelector(".loading");
const productsBanner = document.querySelector(".products-banner");
const productsheader = document.querySelector(".products-header");
const searchboxWrapper = document.querySelector(".searchbox-wrapper");

const productsPageHtml = async () => {
  try {
    const products = await (await fetch(productsUrl)).json();

    if (products) {
      productsBanner.style.display = "block";
      productsheader.style.display = "flex";
      searchboxWrapper.style.display = "flex";
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
