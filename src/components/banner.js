const bannerContainer = document.querySelector(".home-banner");
const loadingContainer = document.querySelector(".loading");

const createBanner = async (homeBanner) => {
  try {
    const getBanner = await (await fetch(homeBanner)).json();
    const bannerImg = getBanner.image_url;
    const bannerAltText = getBanner.hero_banner_alt_text;

    bannerContainer.innerHTML = `
      <img
        class="home-banner__image"
        src='${bannerImg}'
        alt='${bannerAltText}'
      />
    `;
  } catch (err) {
    console.log(err);
  } finally {
    loadingContainer.style.display = "none";
  }
};

export default createBanner;
