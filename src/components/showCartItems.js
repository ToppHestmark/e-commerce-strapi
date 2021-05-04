const cartContainer = document.querySelector(".cart__container");
import { removeCartItem } from "../helpers/index.js";

const showCartItems = (products, cartIds) => {
  cartContainer.innerHTML = "";
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
        <div class="cart__text-box">
          <h4 class="cart__title"> ${title} </h4>
          <div class="cart__price">$ ${price} </div>
          <a 
            class="cart__link"
            href="details.html?product_id=${id}"
            >
            View product
          </a>
          <div>
            <i class="far fa-trash-alt cart__trash-icon"
              data-id='${id}'
              ></i>
          </div>
        </div>
      </div>
    `;
  });

  const trashIcon = document.querySelectorAll(".cart__trash-icon");
  trashIcon.forEach((icon) => {
    icon.onclick = (e) => setTimeout(() => removeCartItem(e, products), 500);
  });
};

export default showCartItems;
