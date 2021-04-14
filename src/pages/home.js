import { baseUrl, homeBanner } from "../settings/apis.js";

const createBanner = async () => {
  const bannerContainer = document.querySelector(".home-banner");

  try {
    const getBanner = await (await fetch(homeBanner)).json();
    // const bannerImg = baseUrl + getBanner.hero_banner.url;
    const bannerAltText = getBanner.hero_banner_alt_text;

    bannerContainer.innerHTML = `
    <img
      class="home-banner__image"
      src="./assets/temp/bergen.jpg"
      alt=${bannerAltText}
    />
    <div class="home-banner__text">
      <h1>Hello home</h1>
    </div>
    `;
  } catch (err) {
    console.log(err);
  }
};
createBanner();
