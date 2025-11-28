import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { createOrder } from "../api/api";

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const [form, setForm] = useState({
    customer_name: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const submit = async () => {
    const order = {
      ...form,
      items: cart,
      total,
    };

    await createOrder(order);
    clearCart();
    alert("Заказ оформлен!");
  };

  return (
    <div>
      <h2>Корзина</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} — {item.price} ₽ × {item.qty}
        </div>
      ))}

      <h3>Итого: {total} ₽</h3>

      <input
        placeholder="Ваше имя"
        onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
      />
      <input
        placeholder="Адрес"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <input
        placeholder="Телефон"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <button onClick={submit}>Оформить</button>
    </div>
  );
}
