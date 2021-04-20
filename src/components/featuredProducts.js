import { productsUrl } from "../settings/apis.js";

const featuredContainer = document.querySelector(".featured");
const subHeader = document.querySelector(".home__subheader");

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
            More details
          </a>
        </div>
      `;
    });
  } catch (err) {
    console.log(err);
  } finally {
    subHeader.style.display = "block";
  }
};

export default featuredProducts;
