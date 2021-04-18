import { productsUrl } from "../settings/apis.js";
import { getUserToken } from "../utils/storage.js";

const token = getUserToken();
if (!token) window.location.replace("/");

const params = new URLSearchParams(document.location.search.toString());
const id = params.get("product_id");

const editProductForm = document.querySelector("#edit-form");
const titleInput = document.querySelector("#title");
const priceInput = document.querySelector("#price");
const featuredInput = document.querySelector("#featured");
const imageUrlInput = document.querySelector("#image_url");
const descriptionInput = document.querySelector("#description");
const messageWrapper = document.querySelector(".form-message-container");
