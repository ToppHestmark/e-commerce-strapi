import { logoutUser } from "../utils/storage.js";

const performLogout = () => {
  const logoutButton = document.querySelector("#logout");

  if (logoutButton) {
    logoutButton.onclick = () => {
      const confirmation = confirm("Please confirm to sign off your account.");
      if (confirmation) {
        logoutUser();
        window.location.replace("/");
      }
    };
  }
};

export default performLogout;
