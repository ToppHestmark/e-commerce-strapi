const passwordValidationMessage = document.querySelector(
  ".password-validation"
);
const passwordInput = document.querySelector(".form__password-input");

const isEmptyMsg = () => {
  passwordInput.style.borderBottom = "1px solid #ff5959";
  passwordValidationMessage.innerHTML = `<small class="error">Please enter your password</small>`;
};

const isContainingValueMsg = () => {
  passwordInput.style.borderBottom = "1px solid #333";
  passwordValidationMessage.innerHTML = "";
  return true;
};

const validatePassword = (passwordValue) =>
  passwordValue.length === 0
    ? isEmptyMsg()
    : passwordValue.length > 0
    ? isContainingValueMsg()
    : false;

export default validatePassword;
