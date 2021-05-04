import toggleCart from "./toggleCart.js";
import { getExistingCart } from "../utils/storage.js";
import { showCartItems, showTotalPrice } from "../components/index.js";

const removeCartItem = (e, products) => {
  toggleCart(e);

  const cartItemsArray = getExistingCart();
  const cartIds = cartItemsArray.map((el) => parseInt(el.id));

  showCartItems(products, cartIds);
  showTotalPrice(products, cartIds);
};

export default removeCartItem;
