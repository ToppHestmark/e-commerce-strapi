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

  try {
    const res = await (await fetch(url, options)).json();

    if (res.created_at) {
      displayMessage(
        "success",
        "Successfully updated product.",
        ".form-message-container"
      );
    }

    res.error &&
      displayMessage("error", res.message, ".form-message-container");
  } catch (error) {
    displayMessage(
      "error",
      "Error occured when trying to connection to server..",
      ".form-message-container"
    );
  }
};

export default updateProduct;
