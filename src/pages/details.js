import { productsUrl } from "../settings/apis.js";
import {
  createNavbar,
  createFooter,
  showDetails,
  displayMessage,
} from "../components/index.js";

createNavbar();
createFooter();

const params = new URLSearchParams(document.location.search.toString());
const id = params.get("product_id");
const loadingContainer = document.querySelector(".loading");

const productDetails = async () => {
  try {
    const product = await (await fetch(`${productsUrl}/${id}`)).json();

    showDetails(product);
  } catch (error) {
    displayMessage(
      "error",
      "Ooops, and error occured when connecting to server.",
      ".message-container"
    );
  } finally {
    loadingContainer.style.display = "none";
  }
};
productDetails();
