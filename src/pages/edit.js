import { productsUrl } from "../settings/apis.js";
import { getUserToken } from "../utils/storage.js";
import { clearMessage, deleteProduct } from "../helpers/index.js";

const params = new URLSearchParams(document.location.search.toString());
const id = params.get("product_id");
const productById = `${productsUrl}/${id}`;

const token = getUserToken();
if (!token) window.location.replace("/");

const editProductForm = document.querySelector("#edit-form");
const deleteBtn = document.querySelector(".form__deleteBtn");
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const featuredInput = document.querySelector("#featured");
const imageUrlInput = document.querySelector("#image_url");
const descriptionInput = document.querySelector("#description");
const messageWrapper = document.querySelector(".form-message-container");

clearMessage(messageWrapper);

const editPageHtml = async () => {
  try {
    const product = await (await fetch(productById)).json();

    titleInput.value = product.title;
    priceInput.value = product.price;
    featuredInput.checked = product.featured;
    imageUrlInput.value = product.image_url;
    descriptionInput.value = product.description;

    document.title = "Edit " + titleInput.value;

    deleteBtn.onclick = (e) => {
      e.preventDefault();
      deleteProduct(id, token);
    };
  } catch (error) {
    console.log(error);
  }
};
editPageHtml();
