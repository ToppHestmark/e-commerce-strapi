import { productsUrl } from "../settings/apis.js";

const featuredContainer = document.querySelector(".featured");

const featuredProducts = async () => {
  try {
    const products = await (await fetch(productsUrl)).json();

    products.forEach((product) => {
      if (!product.featured) return null;

      const title = product.title;
      const productImage = product.image_url;
      const id = product.id;

      featuredContainer.innerHTML += `
        <div class="featured__card">
          <div class="featured__image-wrapper">
            <img 
              src='${productImage}' 
              alt='${title}' 
              />
          </div>
          <h4 class="featured__title"> ${title} </h4>
          <a 
            class="featured__link"
            href="details.html?product_id=${id}"
            >
            More details
          </a>
        </div>
      `;
    });
  } catch (err) {
    console.log(err);
  }
};

export default featuredProducts;
