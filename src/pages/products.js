import { productsUrl } from "../settings/apis.js";
import { searchBox, showProducts } from "../components/index.js";

const productsPageHtml = async () => {
  try {
    const products = await (await fetch(productsUrl)).json();

    showProducts(products);
    searchBox(products);
  } catch (error) {
    console.log(error);
  }
};
productsPageHtml();
