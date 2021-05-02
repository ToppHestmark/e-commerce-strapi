const usernameInput = document.querySelector(".form__username-input");
const userValidationMessage = document.querySelector(".username-validation");

const isEmptyMsg = () => {
  usernameInput.style.borderBottom = "1px solid #ff5959";
  userValidationMessage.innerHTML = `<small class="error">Please enter username or E-mail</small>`;
};

const isContainingValueMsg = () => {
  usernameInput.style.borderBottom = "1px solid #333";
  userValidationMessage.innerHTML = "";
  return true;
};

const validateUsername = (usernameValue) =>
  usernameValue.length === 0
    ? isEmptyMsg()
    : usernameValue.length > 0
    ? isContainingValueMsg()
    : false;

export default validateUsername;
