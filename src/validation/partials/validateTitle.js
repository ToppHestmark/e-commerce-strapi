const titleInput = document.querySelector("#title");
const titleValidationMessage = document.querySelector(".title-validation");

const nonValueMsg = () => {
  titleInput.style.borderBottom = "1px solid #ff5959";
  titleValidationMessage.innerHTML = `<small class="error">Title is required</small>`;
};

const isTooShortMsg = () => {
  titleInput.style.borderBottom = "1px solid #ff5959";
  titleValidationMessage.innerHTML = `<small class="error">Title must contain more than 3 characters</small>`;
};

const isValidMsg = () => {
  titleInput.style.borderBottom = "1px solid #333";
  titleValidationMessage.innerHTML = `<small class="success">Looking good</small>`;
  return true;
};

const validateTitle = (titleValue) =>
  titleValue.length === 0
    ? nonValueMsg()
    : titleValue.length <= 3
    ? isTooShortMsg()
    : titleValue.length > 3
    ? isValidMsg()
    : false;

export default validateTitle;
