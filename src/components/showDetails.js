import { baseUrl } from "../settings/apis.js";
import { toggleCart } from "../helpers/index.js";
import { getExistingCart } from "../utils/storage.js";

const showDetails = (product) => {
  const detailsContainer = document.querySelector(".details__container");

  const title = product.title;
  const description = product.description;
  const price = product.price;
  const productId = product.id;
  const image = baseUrl + product.image.url;

  const itemFromCart = getExistingCart();
  const isInCart = itemFromCart.includes(productId.toString());
  const cartIconState = isInCart ? "fa-shopping-cart" : "fa-cart-arrow-down";

  detailsContainer.innerHTML = `
    <div class="details__wrapper">
      <div class="details__image-wrapper">
        <img 
          src='${image}'
          alt='${title}'
        />
      </div>
      <div class="details__right">
        <h2> ${title} </h2>
        <p>$ ${price} </p>
        <i 
          class="details__add-to-cart fas ${cartIconState}"
          data-id="${productId}" 
          >
        </i>
      </div>
    </div>
    <div class="details__description">
      <h4>About</h4>
      <p> ${description} </p>
    </div>
  `;

  const cartIcon = document.querySelector(".details__add-to-cart");
  cartIcon.onclick = () => toggleCart(event);
};

export default showDetails;
