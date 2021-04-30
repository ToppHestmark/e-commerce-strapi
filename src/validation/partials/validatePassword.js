const passwordValidationMessage = document.querySelector(
  ".password-validation"
);
const passwordInput = document.querySelector(".form__password-input");

const validatePassword = (passwordValue) => {
  if (passwordValue.length === 0) {
    passwordInput.style.borderBottom = "1px solid #ff5959";
    passwordValidationMessage.innerHTML = `<small class="error">Please enter your password</small>`;
  } else {
    passwordInput.style.borderBottom = "1px solid #333";
    passwordValidationMessage.innerHTML = "";
    return true;
  }
  return false;
};

export default validatePassword;
