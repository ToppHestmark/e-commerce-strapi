const cartStorageKey = "cart-items";
const userKey = "user";
const userJWTKey = "userJWT";

export function saveTokenToStorage(token) {
  saveDataToStorage(userJWTKey, token);
}

export function getTokenFromStorage() {
  return retrieveDataFromStorage(userJWTKey);
}

export function saveUserToStorage(user) {
  saveDataToStorage(userKey, user);
}

export function logoutUser() {
  removeItemFromStorage(userKey);
  removeItemFromStorage(userJWTKey);
}

export function getUsername() {
  const user = retrieveDataFromStorage(userKey);

  if (user) return user.username;

  return null;
}

export function getUserToken() {
  const token = retrieveDataFromStorage(userJWTKey);
  return token;
}

export function saveToCart(cart) {
  return localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

export function getExistingCart() {
  const cart = localStorage.getItem(cartStorageKey);

  if (!cart) return [];
  else return JSON.parse(cart);
}

function saveDataToStorage(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function retrieveDataFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) return null;

  return JSON.parse(value);
}

function removeItemFromStorage(key) {
  localStorage.removeItem(key);
}
