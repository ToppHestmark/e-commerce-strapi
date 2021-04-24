import displayMessage from "./common/displayMessage.js";

const bannerContainer = document.querySelector(".home-banner");
const loadingContainer = document.querySelector(".loading");

const createBanner = async (homeBanner) => {
  try {
    const getBanner = await (await fetch(homeBanner)).json();
    const bannerImg = getBanner.image_url;

    bannerContainer.innerHTML = `
      <div
        class="home-banner__image"
        style="background-image: url('${bannerImg}');"
        />
      `;
  } catch (err) {
    displayMessage(
      "error",
      "Ooops, an error occured when connecting to the server.",
      ".message-container"
    );
  } finally {
    loadingContainer.style.display = "none";
  }
};

export default createBanner;
