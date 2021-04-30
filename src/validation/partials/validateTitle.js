const titleInput = document.querySelector("#title");
const titleValidationMessage = document.querySelector(".title-validation");

const validateTitle = (titleValue) => {
  if (titleValue.length === 0) {
    titleInput.style.borderBottom = "1px solid #ff5959";
    titleValidationMessage.innerHTML = `<small class="error">Title is required</small>`;
  } else if (titleValue.length <= 3) {
    titleInput.style.borderBottom = "1px solid #ff5959";
    titleValidationMessage.innerHTML = `<small class="error">Title must contain more than 3 characters</small>`;
  } else {
    titleInput.style.borderBottom = "1px solid #333";
    titleValidationMessage.innerHTML = `<small class="success">Looking good</small>`;
    return true;
  }

  return false;
};

export default validateTitle;
