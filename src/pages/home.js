import { homeBanner } from "../settings/apis.js";
import {
  createBanner,
  featuredProducts,
  lowerFlyer,
  upperFlyer,
} from "../components/index.js";

const upperFlyerSection = document.querySelector(".home-flyer.upper");
const lowerFlyerSection = document.querySelector(".home-flyer.lower");

upperFlyerSection.innerHTML = upperFlyer;
lowerFlyerSection.innerHTML = lowerFlyer;

createBanner(homeBanner);
featuredProducts();
