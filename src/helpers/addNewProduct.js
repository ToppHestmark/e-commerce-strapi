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

  try {
    const res = await (await fetch(url, options)).json();

    if (res.created_at) {
      displayMessage(
        "success",
        "A new product has been successfully added.",
        ".form-message-container"
      );
      addProductForm.reset();
    }

    res.error &&
      displayMessage("error", res.message, ".form-message-container");
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Error occured when trying to connection to server..",
      ".form-message-container"
    );
  }
};

export default addNewProduct;
