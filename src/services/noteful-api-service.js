import { API_ENDPOINT } from "../config";

const NotefulApiService = {
  getFolders() {
    return fetch(`${API_ENDPOINT}/folders`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postProductToBasket(item) {
    return fetch(`${API_ENDPOINT}/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getNotes() {
    return fetch(`${API_ENDPOINT}/notes`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  deleteItemInBasket(item_id) {
    return fetch(`${API_ENDPOINT}/cart/items/${item_id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postLogin(credentials) {
    return fetch(`${API_ENDPOINT}/auth/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postOrder(newOrder) {
    return fetch(`${API_ENDPOINT}/order/history`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newOrder),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default NotefulApiService;
