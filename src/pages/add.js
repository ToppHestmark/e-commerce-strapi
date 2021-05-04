import { createNavbar, createFooter } from "../components/index.js";
import { getUserToken } from "../utils/storage.js";
import { clearMessage, setFocus, addNewProduct } from "../helpers/index.js";
import productValidation from "../validation/productValidation.js";

createNavbar();
createFooter();

const token = getUserToken();
if (!token) window.location.replace("/");

const addProductForm = document.querySelector("#add-form");
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const featuredInput = document.querySelector("#featured");
const imageUrlInput = document.querySelector("#image_url");
const descriptionInput = document.querySelector("#description");
const messageWrapper = document.querySelector(".form-message-container");

setFocus(titleInput);
clearMessage(messageWrapper);

addProductForm.onsubmit = (event) => {
  event.preventDefault();
  messageWrapper.innerHTML = "";

  const titleValue = titleInput.value.trim();
  const priceValue = priceInput.value;
  const featuredValue = featuredInput.checked;
  const imageUrlValue = imageUrlInput.value;
  const descriptionValue = descriptionInput.value.trim();

  const props = {
    titleValue,
    priceValue,
    featuredValue,
    imageUrlValue,
    descriptionValue,
    addProductForm,
    token,
  };

  productValidation(titleValue, priceValue, imageUrlValue, descriptionValue) &&
    addNewProduct(props);
};
