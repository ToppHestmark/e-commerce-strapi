import { baseUrl, homeBanner, productsUrl } from "../settings/apis.js";
import { createBanner } from "../components/index.js";

createBanner(baseUrl, homeBanner);

const featuredProducts = async () => {
  const featuredContainer = document.querySelector(".featured");

  try {
    const getProducts = await (await fetch(productsUrl)).json();

    getProducts.forEach((product) => {
      if (!product.featured) return null;

      const title = product.title;
      const productImage = baseUrl + product.image.url;
      const id = product.id;

      featuredContainer.innerHTML += `
      <div class="featured__card">
        <h4> ${title} </h4>
        <div class="featured__image-wrapper">
          <img 
            src='${productImage}' 
            alt='${title}' 
            />
        </div>
        <a 
          class="featured__link"
          href="details.html?product_id=${id}"
          >
          Read more
        </a>
      </div>
      `;
    });
  } catch (err) {
    console.log(err);
  }
};

featuredProducts();
