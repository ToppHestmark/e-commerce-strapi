const descriptionInput = document.querySelector("#description");
const validationMessage = document.querySelector(".description-validation");

const validateDescription = (descriptionValue) => {
  if (descriptionValue.length === 0) {
    descriptionInput.style.border = "1px solid #ff5959";
    validationMessage.innerHTML = `<small class="error">Description is required</small>`;
  }

  if (descriptionValue.length <= 5) {
    descriptionInput.style.border = "1px solid #ff5959";
    validationMessage.innerHTML = `<small class="error">Must contain more than 5 characters</small>`;
  } else {
    descriptionInput.style.border = "1px solid #333";
    validationMessage.innerHTML = `<small class="success">Looking good</small>`;
    return true;
  }

  return false;
};

export default validateDescription;
