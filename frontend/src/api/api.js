const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with status ${res.status}`);
  }

  return res.json();
}

export function getProducts() {
  return request("/products");
}

export function getProduct(id) {
  return request(`/products/${id}`);
}

export function createOrder(payload) {
  return request("/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getOrders() {
  return request("/orders");
}
