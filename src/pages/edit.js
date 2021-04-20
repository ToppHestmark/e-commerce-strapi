import { productsUrl } from "../settings/apis.js";
import { getUserToken } from "../utils/storage.js";
import {
  clearMessage,
  deleteProduct,
  updateProduct,
} from "../helpers/index.js";
import { displayMessage } from "../components/index.js";

const params = new URLSearchParams(document.location.search.toString());
const id = params.get("product_id");
const productById = `${productsUrl}/${id}`;

const token = getUserToken();
if (!token) window.location.replace("/");

const editHeader = document.querySelector(".edit__header");
const editProductForm = document.querySelector("#edit-form");
const deleteBtn = document.querySelector(".form__deleteBtn");
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const featuredInput = document.querySelector("#featured");
const imageUrlInput = document.querySelector("#image_url");
const descriptionInput = document.querySelector("#description");
const messageWrapper = document.querySelector(".form-message-container");
const loadingContainer = document.querySelector(".loading");

clearMessage(messageWrapper);

const editPageHtml = async () => {
  try {
    const product = await (await fetch(productById)).json();

    titleInput.value = product.title;
    priceInput.value = product.price;
    featuredInput.checked = product.featured;
    imageUrlInput.value = product.image_url;
    descriptionInput.value = product.description;

    document.title = `Edit ${product.title}`;
    editHeader.innerHTML = `Edit ${product.title}`;

    deleteBtn.onclick = () => deleteProduct(id, token);
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      loadingContainer.style.display = "none";
      editProductForm.style.display = "block";
    }, 1000);
  }
};
editPageHtml();

editProductForm.onsubmit = (event) => {
  event.preventDefault();
  messageWrapper.innerHTML = "";

  const titleValue = titleInput.value.trim();
  const priceValue = priceInput.value;
  const featuredValue = featuredInput.checked;
  const imageUrlValue = imageUrlInput.value;
  const descriptionValue = descriptionInput.value.trim();

  if (
    titleValue.length === 0 ||
    isNaN(priceValue) ||
    imageUrlValue.length === 0 ||
    descriptionValue.length === 0
  ) {
    return displayMessage(
      "error",
      "Please apply proper value!",
      ".form-message-container"
    );
  }

  const props = {
    titleValue,
    priceValue,
    featuredValue,
    imageUrlValue,
    descriptionValue,
    token,
    id,
  };

  updateProduct(props);
};
