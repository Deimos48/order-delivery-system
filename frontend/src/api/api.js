const API_URL = import.meta.env.MODE === "development"
  ? "http://localhost:4000/api"
  : "/api";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  return await res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`);
  return await res.json();
}

export async function createOrder(orderData) {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  return await res.json();
}

export async function getOrders() {
  const res = await fetch(`${API_URL}/orders`);
  return await res.json();
}
