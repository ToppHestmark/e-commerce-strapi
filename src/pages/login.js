import { displayMessage } from "../components/index.js";
import { performLogin, clearMessage, setFocus } from "../helpers/index.js";
import { getUsername } from "../utils/storage.js";

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

  if (usernameValue.length < 3 || passwordValue.length < 3) {
    return displayMessage(
      "error",
      "Invalid values.",
      ".form-message-container"
    );
  }

  performLogin(usernameValue, passwordValue);
};
