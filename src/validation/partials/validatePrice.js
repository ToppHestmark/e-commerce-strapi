const priceInput = document.querySelector("#price");
const priceValidationMessage = document.querySelector(".price-validation");

const validatePrice = (priceValue) => {
  const isEmpty = priceValue === "";
  const isNumberic = /^[0-9]/.test(priceValue);
  const isZero = parseInt(priceValue) === 0;

  if (isEmpty) {
    priceInput.style.borderBottom = "1px solid #ff5959";
    priceValidationMessage.innerHTML = `<small class="error">Price is required</small>`;
  } else if (!isNumberic) {
    priceInput.style.borderBottom = "1px solid #ff5959";
    priceValidationMessage.innerHTML = `<small class="error">Please enter a valid number</small>`;
  } else if (isZero) {
    priceInput.style.borderBottom = "1px solid #ff5959";
    priceValidationMessage.innerHTML = `<small class="error">Price must be at least 1 and above</small>`;
  } else {
    priceInput.style.borderBottom = "1px solid #333";
    priceValidationMessage.innerHTML = `<small class="success">Looking good</small>`;
    return true;
  }

  return false;
};

export default validatePrice;
