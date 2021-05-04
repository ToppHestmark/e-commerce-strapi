import { createNavbar, createFooter } from "../components/index.js";
import loginValidation from "../validation/loginValidation.js";
import { performLogin, clearMessage, setFocus } from "../helpers/index.js";
import { getUsername } from "../utils/storage.js";

createNavbar();
createFooter();

const userExist = getUsername();

if (userExist) {
  window.location.replace("/");
}

const loginForm = document.querySelector("#login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".form-message-container");

setFocus(username);
clearMessage(message);

loginForm.onsubmit = (event) => {
  event.preventDefault();
  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  loginValidation(usernameValue, passwordValue) &&
    performLogin(usernameValue, passwordValue);
};
