import { productsUrl } from "../settings/apis.js";
import { displayMessage } from "../components/index.js";

const deleteProduct = async (id, token) => {
  const confirmation = confirm("Are you sure about deleting this product?");

  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const errorMessage = `
    <div>
      <i class="fas fa-exclamation-triangle"></i>
      <div class="description">
        Ooops, can't connect to the server.
      </div>
    </div>
  `;

  try {
    if (confirmation) {
      await (await fetch(`${productsUrl}/${id}`, options)).json();
      window.location.replace("/products.html");
    }
  } catch (error) {
    displayMessage("error", errorMessage, ".form-message-container");
  }
};

export default deleteProduct;
