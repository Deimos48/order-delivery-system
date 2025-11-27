import { useEffect, useState } from "react";
import { getOrders } from "../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Мои заказы</h1>

      {orders.map((o) => (
        <div
          key={o.id}
          style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
        >
          <p>Заказ №{o.id}</p>
          <p>Сумма: {o.total} ₽</p>
          <p>Статус: {o.status}</p>
        </div>
      ))}
    </div>
  );
}
