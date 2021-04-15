import { productsUrl, baseUrl } from "../settings/apis.js";
const params = new URLSearchParams(document.location.search.toString());
const id = params.get("product_id");

const detailsContainer = document.querySelector(".details__container");

const productDetails = async () => {
  try {
    const product = await (await fetch(`${productsUrl}/${id}`)).json();

    const title = product.title;
    const description = product.description;
    const price = product.price;
    const productId = product.id;
    const image = baseUrl + product.image.url;

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
        <i class="fas fa-shopping-bag details__add-to-cart"></i>
        <div class="details__description">
          <h4>About</h4>
          <p> ${description} </p>
        </div>
      </div>
    </div>
    `;
  } catch (error) {
    console.log(error);
  }
};
productDetails();
