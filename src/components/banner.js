const bannerContainer = document.querySelector(".home-banner");

const createBanner = async (baseUrl, homeBanner) => {
  try {
    const getBanner = await (await fetch(homeBanner)).json();
    const bannerImg = baseUrl + getBanner.hero_banner.url;
    const bannerAltText = getBanner.hero_banner_alt_text;
    console.log(getBanner);

    bannerContainer.innerHTML = `
      <img
        class="home-banner__image"
        src='${bannerImg}'
        alt='${bannerAltText}'
      />
      <div class="home-banner__text">
        <h1>Nordic choice of styles</h1>
        <p>Denim for everyone, to everyday wear.</p>
      </div>
    `;
  } catch (err) {
    console.log(err);
  }
};

export default createBanner;
