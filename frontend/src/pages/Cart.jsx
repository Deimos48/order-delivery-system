import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { createOrder } from "../api/api";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const checkout = async () => {
    const res = await createOrder({ items: cart });
    alert(`Заказ оформлен! ID: ${res.orderId}`);
    clearCart();
  };

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Корзина</h1>

      {cart.length === 0 ? <p>Корзина пуста</p> : null}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          {item.title} — {item.price} ₽
          <button onClick={() => removeFromCart(item.id)}>Удалить</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Итого: {total} ₽</h3>
          <button onClick={checkout}>Оформить заказ</button>
        </>
      )}
    </div>
  );
}
