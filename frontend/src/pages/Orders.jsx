import { useEffect, useState } from "react";
import { getOrders } from "../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  return (
    <div>
      <h2>Заказы</h2>

      {orders.map((o) => (
        <div key={o.id} className="order-card">
          <h3>Заказ #{o.id}</h3>
          <p>Имя: {o.customer_name}</p>
          <p>Адрес: {o.address}</p>
          <p>Телефон: {o.phone}</p>
          <p>Статус: {o.status}</p>
          <p>Сумма: {o.total} ₽</p>

          <details>
            <summary>Товары</summary>
            {o.items.map((i, idx) => (
              <div key={idx}>
                {i.name} — {i.price} ₽ × {i.qty}
              </div>
            ))}
          </details>
        </div>
      ))}
    </div>
  );
}
