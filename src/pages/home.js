import {
  createBanner,
  featuredProducts,
  lowerFlyer,
  upperFlyer,
  inspiredSectionHtml,
  createNavbar,
  createFooter,
} from "../components/index.js";
import { homeBanner } from "../settings/apis.js";

createNavbar();
createFooter();

const upperFlyerSection = document.querySelector(".home-flyer.upper");
const inspiredSection = document.querySelector(".inspired");
const lowerFlyerSection = document.querySelector(".home-flyer.lower");

upperFlyerSection.innerHTML = upperFlyer;
inspiredSection.innerHTML = inspiredSectionHtml;
lowerFlyerSection.innerHTML = lowerFlyer;

createBanner(homeBanner);
featuredProducts();
