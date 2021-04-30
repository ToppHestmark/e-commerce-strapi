import { validateUsername, validatePassword } from "./partials/index.js";

const loginValidation = (usernameValue, passwordValue) => {
  if (validateUsername(usernameValue) & validatePassword(passwordValue))
    return true;

  return false;
};

export default loginValidation;
