import {
  validateTitle,
  validatePrice,
  validateUrl,
  validateDescription,
} from "./partials/index.js";

const titleValidationMessage = document.querySelector(".title-validation");
const priceValidationMessage = document.querySelector(".price-validation");
const imageUrlMessage = document.querySelector(".imageurl-validation");
const descValMsg = document.querySelector(".description-validation");

const productValidation = (
  titleValue,
  priceValue,
  imageUrlValue,
  descriptionValue
) => {
  if (
    validateTitle(titleValue) &
    validatePrice(priceValue) &
    validateUrl(imageUrlValue) &
    validateDescription(descriptionValue)
  ) {
    titleValidationMessage.innerHTML = "";
    priceValidationMessage.innerHTML = "";
    imageUrlMessage.innerHTML = "";
    descValMsg.innerHTML = "";

    return true;
  }

  return false;
};

export default productValidation;
