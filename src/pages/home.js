import { baseUrl, homeBanner } from "../settings/apis.js";
import { createBanner, featuredProducts } from "../components/index.js";

createBanner(baseUrl, homeBanner);
featuredProducts();
