import { productsUrl } from "../settings/apis.js";
import { showDetails } from "../components/index.js";

const params = new URLSearchParams(document.location.search.toString());
const id = params.get("product_id");

const productDetails = async () => {
  try {
    const product = await (await fetch(`${productsUrl}/${id}`)).json();

    showDetails(product);
  } catch (error) {
    console.log(error);
  }
};
productDetails();
