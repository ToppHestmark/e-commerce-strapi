import { productsUrl } from "../settings/apis.js";
import { searchBox, showProducts } from "../components/index.js";

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
    console.log(error);
  } finally {
    loadingContainer.style.display = "none";
  }
};
productsPageHtml();
