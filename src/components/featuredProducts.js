import { productsUrl } from "../settings/apis.js";
import { getUsername } from "../utils/storage.js";

const featuredIntroContainer = document.querySelector(".feature-intro");
const featuredContainer = document.querySelector(".featured");

const username = getUsername();

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

      let editPage = "";
      if (username) {
        editPage = `<a 
            class="featured__link authenticated"  
            href="edit.html?product_id=${id}"
            >
            Edit product
          </a>
        `;
      }

      featuredContainer.innerHTML += `
        <div class="featured__card">
          <a href="details.html?product_id=${id}">
            <div class="featured__image-wrapper">
              <img 
                src='${productImage}' 
                alt='${title}'
                loading="lazy"
                />
            </div>
            </a>
            <p class="featured__title"> ${title} </p>
            ${editPage}
        </div>
      `;
    });
  } catch (err) {
    console.log(err);
  }
};

export default featuredProducts;
