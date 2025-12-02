import { mockDelivery } from "../mock/delivery";

export default function TrackOrder() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Отслеживание заказа</h1>

      <h3>Заказ №{mockDelivery.orderId}</h3>
      <p><b>Статус:</b> {mockDelivery.status}</p>
      <p><b>Последнее обновление:</b> {mockDelivery.updatedAt}</p>

      <h3>Этапы:</h3>
      <ul>
        {mockDelivery.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
