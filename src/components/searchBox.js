import showProducts from "./showProducts.js";
import displayMessage from "./common/displayMessage.js";

const searchBox = (products) => {
  const search = document.querySelector("#search-box");

  window.onload = search.focus();

  search.onkeyup = (event) => {
    const searchValue = event.target.value.trim().toLowerCase();

    const searchResults = products.filter((product) => {
      const productTitle = product.title.toLowerCase();
      const productDescription = product.description.toLowerCase();

      // Title & description as requested.
      const results =
        productTitle.includes(searchValue) ||
        productDescription.includes(searchValue);

      return results;
    });

    searchResults.length === 0
      ? displayMessage(
          "message",
          "Sorry, no matching title or product description.",
          ".message-container"
        )
      : displayMessage("message", "", ".message-container");

    showProducts(searchResults);
  };
};

export default searchBox;
