const descriptionInput = document.querySelector("#description");
const validationMessage = document.querySelector(".description-validation");

const isEmptyMessage = () => {
  descriptionInput.style.border = "1px solid #ff5959";
  validationMessage.innerHTML = `<small class="error">Description is required</small>`;
};

const isBelowFiveChar = () => {
  descriptionInput.style.border = "1px solid #ff5959";
  validationMessage.innerHTML = `<small class="error">Must be more than 5 characters</small>`;
};

const validValue = () => {
  descriptionInput.style.border = "1px solid #333";
  validationMessage.innerHTML = `<small class="success">Looking good</small>`;
  return true;
};

const validateDescription = (descriptionValue) =>
  descriptionValue.length === 0
    ? isEmptyMessage()
    : descriptionValue.length <= 5
    ? isBelowFiveChar()
    : descriptionValue.length >= 5
    ? validValue()
    : false;

export default validateDescription;
