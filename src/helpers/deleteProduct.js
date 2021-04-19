import { productsUrl } from "../settings/apis.js";

const deleteProduct = async (id, token) => {
  const confirmation = confirm("Are you sure about deleting this product?");

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    if (confirmation) {
      await (await fetch(`${productsUrl}/${id}`, options)).json();
    }
  } catch (error) {
    console.log(error);
  } finally {
    if (confirmation) {
      window.location.replace("/products.html");
    }
  }
};

export default deleteProduct;
