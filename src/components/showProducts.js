import { baseUrl } from "../settings/apis.js";
const productsContainer = document.querySelector(".products");

const showProducts = (products) => {
  productsContainer.innerHTML = "";

  products.map((product) => {
    const title = product.title;
    const price = product.price;
    const productImage = baseUrl + product.image.url;
    const id = product.id;

    productsContainer.innerHTML += `
      <div class="products__card">
        <h4 class="products__title"> ${title} </h4>
        <div class="products__image-wrapper">
          <img 
            src='${productImage}' 
            alt='${title}' 
            />
        </div>
        <div class="products__price">$ ${price} </div>
        <a 
          class="products__link"
          href="details.html?product_id=${id}"
          >
          More details
        </a>
      </div>
    `;
  });
};

export default showProducts;
