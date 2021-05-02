const priceInput = document.querySelector("#price");
const priceValidationMessage = document.querySelector(".price-validation");

const emptyMsg = () => {
  priceInput.style.borderBottom = "1px solid #ff5959";
  priceValidationMessage.innerHTML = `<small class="error">Price is required</small>`;
};

const invalidValueMsg = () => {
  priceInput.style.borderBottom = "1px solid #ff5959";
  priceValidationMessage.innerHTML = `<small class="error">Please enter a valid number</small>`;
};

const isZeroMsg = () => {
  priceInput.style.borderBottom = "1px solid #ff5959";
  priceValidationMessage.innerHTML = `<small class="error">Price must be at least 1 and above</small>`;
};

const validMsg = () => {
  priceInput.style.borderBottom = "1px solid #333";
  priceValidationMessage.innerHTML = `<small class="success">Looking good</small>`;
  return true;
};

const validatePrice = (priceValue) => {
  const isEmpty = priceValue === "";
  const isNumberic = /^[0-9]/.test(priceValue);
  const isZero = parseInt(priceValue) === 0;

  return isEmpty
    ? emptyMsg()
    : !isNumberic
    ? invalidValueMsg()
    : isZero
    ? isZeroMsg()
    : isNumberic
    ? validMsg()
    : false;
};

export default validatePrice;
