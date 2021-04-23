import { productsUrl } from "../settings/apis.js";

const featuredIntroContainer = document.querySelector(".feature-intro");
const featuredContainer = document.querySelector(".featured");

const featuredProducts = async () => {
  try {
    const products = await (await fetch(productsUrl)).json();

    products.forEach((product) => {
      if (!product.featured) return null;

      if (product) {
        featuredIntroContainer.style.display = "flex";
        featuredContainer.style.display = "grid";
      }

      const title = product.title;
      const productImage = product.image_url;
      const id = product.id;

      featuredContainer.innerHTML += `
        <a href="details.html?product_id=${id}" 
          class="featured__card">
          <div class="featured__image-wrapper">
            <img 
              src='${productImage}' 
              alt='${title}' 
              />
          </div>
          <p class="featured__title"> ${title} </p>
        </a>
      `;
    });
  } catch (err) {
    console.log(err);
  }
};

export default featuredProducts;
