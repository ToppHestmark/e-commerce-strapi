import { displayMessage } from "../components/index.js";
import { productsUrl } from "../settings/apis.js";

const addNewProduct = async (props) => {
  const url = productsUrl;

  const {
    titleValue,
    priceValue,
    featuredValue,
    imageUrlValue,
    descriptionValue,
    addProductForm,
    token,
  } = props;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      title: titleValue,
      price: priceValue,
      featured: featuredValue,
      image_url: imageUrlValue,
      description: descriptionValue,
    }),
  };

  const successMessage = `
    <div>
      <i class="fas fa-check-circle"></i>
      <div class="description">
        Successfully added new product.
      </div>
    </div>
  `;
  const errorMessage = `
    <div>
      <i class="fas fa-exclamation-triangle"></i>
      <div class="description">
        Ooops, can't connect to the server.
      </div>
    </div>
  `;

  try {
    const res = await (await fetch(url, options)).json();

    if (res.created_at) {
      displayMessage("success", successMessage, ".form-message-container");
      addProductForm.reset();
    }
  } catch (error) {
    displayMessage("error", errorMessage, ".form-message-container");
  }
};

export default addNewProduct;
