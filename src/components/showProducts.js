import { getUsername } from "../utils/storage.js";
const productsContainer = document.querySelector(".products");

const username = getUsername();

const showProducts = (products) => {
  productsContainer.innerHTML = "";

  products.map((product) => {
    const title = product.title;
    const price = product.price.toFixed(2);
    const productImage = product.image_url;
    const id = product.id;

    let editPage = "";
    if (username) {
      editPage = `<a 
        class="products__link authenticated"  
        href="edit.html?product_id=${id}"
        >
        Edit product
      </a>`;
    }

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
        <div class="products__links">
          <a 
            class="products__link"
            href="details.html?product_id=${id}"
            >
            More details
          </a>
          ${editPage}
        </div>
      </div>
    `;
  });
};

export default showProducts;
