const cartContainer = document.querySelector(".cart__container");

const showCartItems = (products, cartIds) => {
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
      </div>
    </div>
  `;
  });
};

export default showCartItems;
