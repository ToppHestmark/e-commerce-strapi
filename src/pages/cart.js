import { productsUrl } from "../settings/apis.js";
import { getExistingCart } from "../utils/storage.js";

const cartContainer = document.querySelector(".cart__container");
const loadingContainer = document.querySelector(".loading");

const cartPage = async () => {
  try {
    const products = await (await fetch(productsUrl)).json();

    if (products) {
      loadingContainer.style.display = "none";
    }

    const cartItemsArray = getExistingCart();
    const cartIds = cartItemsArray.map((el) => parseInt(el.id));

    products.map((product) => {
      if (!cartIds.includes(product.id)) return null;

      const title = product.title;
      const price = product.price.toFixed(2);
      const productImage = product.image_url;
      const id = product.id;

      cartContainer.innerHTML += `
      <div class="cart__card">
        <div class="cart__image-wrapper">
          <img 
            src='${productImage}' 
            alt='${title}' 
            />
        </div>
        <div>
          <h4 class="cart__title"> ${title} </h4>
          <div class="cart__price">$ ${price} </div>
          <a 
            class="cart__link"
            href="details.html?product_id=${id}"
            >
            View product
          </a>
        </div>
      </div>
    `;
    });

    const subtotalContainer = document.querySelector(".subtotal");
    const prices = products.map((product) => {
      if (!cartIds.includes(product.id)) return null;
      return product.price;
    });
    const subtotal = prices.reduce((acc, curr) => acc + curr, 0);

    subtotalContainer.innerHTML = `
    <span>
      Subtotal: <strong> $ ${subtotal.toFixed(2)} </strong>
    </span>
  `;
  } catch (error) {
    console.log(error);
  }
};
cartPage();
