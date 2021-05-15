import displayMessage from "./common/displayMessage.js";
const subtotalContainer = document.querySelector(".subtotal");
const cartHeaderContainer = document.querySelector(".cart__header");

const showTotalPrice = (products, cartIds) => {
  subtotalContainer.innerHTML = "";

  const cartItemPrices = products.map((product) => {
    if (!cartIds.includes(product.id)) return null;
    return product.price;
  });

  const subtotal = cartItemPrices.reduce((acc, curr) => acc + curr, 0);
  const totalItems = cartItemPrices.filter((item) => item !== null).length;
  const itemQuantityUnit = totalItems <= 1 ? "item" : "items";

  const totalPrice = new Intl.NumberFormat("us-US").format(subtotal);

  if (totalItems === 0) {
    subtotalContainer.style.display = "none";
    cartHeaderContainer.style.display = "none";

    displayMessage(
      "message",
      "Your cart is currently empty, please add some.",
      ".message-container"
    );
  }

  subtotalContainer.innerHTML = `
    <span>
      <h3 class="subtotal__title"> Subtotal: </h3> 
      <div class="subtotal__itemsQty">
        ${totalItems} ${itemQuantityUnit} 
      </div>
      <p class="subtotal__price"> 
        $ ${totalPrice} 
      </p>
      <button 
        class="subtotal__button"
        type="button">
        Checkout
      </button>
    </span>
  `;
};

export default showTotalPrice;
