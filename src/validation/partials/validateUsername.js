const usernameInput = document.querySelector(".form__username-input");
const userValidationMessage = document.querySelector(".username-validation");

const validateUsername = (usernameValue) => {
  if (usernameValue.length === 0) {
    usernameInput.style.borderBottom = "1px solid #ff5959";
    userValidationMessage.innerHTML = `<small class="error">Please enter username or E-mail</small>`;
  } else {
    usernameInput.style.borderBottom = "1px solid #333";
    userValidationMessage.innerHTML = "";
    return true;
  }

  return false;
};

export default validateUsername;
