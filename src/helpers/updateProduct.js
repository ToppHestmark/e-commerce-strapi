import { displayMessage } from "../components/index.js";
import { productsUrl } from "../settings/apis.js";

const updateProduct = async (props) => {
  const {
    titleValue,
    priceValue,
    featuredValue,
    imageUrlValue,
    descriptionValue,
    token,
    id,
  } = props;

  const url = `${productsUrl}/${id}`;
  const options = {
    method: "PUT",
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
      Product successfully update.
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
      setTimeout(() => window.location.replace("/products.html"), 1000);
    }

    res.error &&
      displayMessage("error", res.message, ".form-message-container");
  } catch (error) {
    displayMessage("error", errorMessage, ".form-message-container");
  }
};

export default updateProduct;
