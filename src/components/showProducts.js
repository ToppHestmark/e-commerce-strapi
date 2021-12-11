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
        </a>
      `;
    }

    productsContainer.innerHTML += `
      <div class="products__card">
        <a href="details.html?product_id=${id}">
          <div class="products__image-wrapper">
            <img 
              src='${productImage}' 
              alt='${title}' 
              loading="lazy"
              />
          </div>
          <div class="products__title"> ${title} </div>
          <div class="products__price">$ ${price} </div>
        </a>
        <div>
        ${editPage}
        </div>
      </div>
    `;
  });
};

export default showProducts;
