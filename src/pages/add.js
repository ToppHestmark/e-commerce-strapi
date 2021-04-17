import { displayMessage } from "../components/index.js";
import { getUserToken } from "../utils/storage.js";
import { clearMessage, setFocus } from "../helpers/index.js";

const token = getUserToken();
if (!token) location.href = "/index.html" || "/";

const addProductForm = document.querySelector("#add-form");
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const featuredInput = document.querySelector("#featured");
const imageFileInput = document.querySelector("#image");
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
  const featuredValue = featuredInput.childNodes;
  const imageFileValue = imageFileInput.value;
  const imageUrlValue = imageUrlInput.value.trim();
  const descriptionValue = descriptionInput.value.trim();

  if (
    titleValue.length === 0 ||
    priceValue <= 0 ||
    imageUrlValue.length === 0 ||
    descriptionValue.length === 0
  ) {
    return displayMessage(
      "error",
      "Please apply proper values!",
      ".form-message-container"
    );
  }

  addNewArticle(
    titleValue,
    imageUrlValue,
    descriptionValue,
    addProductForm,
    token
  );
};
