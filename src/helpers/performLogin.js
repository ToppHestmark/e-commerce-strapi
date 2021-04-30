import { saveTokenToStorage, saveUserToStorage } from "../utils/storage.js";
import { displayMessage } from "../components/index.js";
import { userLoginUrl } from "../settings/apis.js";

const performLogin = async (username, password) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      identifier: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const userData = await (await fetch(userLoginUrl, options)).json();
    const { user, jwt, error } = userData;

    if (error) {
      const errorMessage = userData.message[0].messages[0].message;
      displayMessage("error", errorMessage, ".form-message-container");
    }

    if (user) {
      saveTokenToStorage(jwt);
      saveUserToStorage(user);
      window.location.replace("/");
    }
  } catch (error) {
    displayMessage(
      "error",
      "Error when trying to login.",
      ".form-message-container"
    );
  }
};

export default performLogin;
