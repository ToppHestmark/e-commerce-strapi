import { toggleCart } from "../helpers/index.js";
import { getExistingCart } from "../utils/storage.js";

const showDetails = (product) => {
  const detailsContainer = document.querySelector(".details__container");

  const title = product.title;
  const description = product.description;
  const price = product.price;
  const productId = product.id;
  const image = product.image_url;

  const itemFromCart = getExistingCart();
  const isInCart = itemFromCart.find((item) => parseInt(item.id) === productId);
  const cartIconState = isInCart ? "fa-shopping-cart" : "fa-cart-arrow-down";

  document.title = `${title} | Nordic Swag | Scandinavian inspired clothing and fashion`;

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

        <div class="details__description-wrapper">
          <h5>Description</h5>
          <p> ${description} </p>
        </div>
        
        </div>
    </div>
  `;

  const cartIcon = document.querySelector(".details__add-to-cart");
  cartIcon.onclick = () => toggleCart(event);
};

export default showDetails;
