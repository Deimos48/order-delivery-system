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

  return (
    <div className="page">
      <h1>Корзина</h1>

      {cart.length === 0 ? <p>Корзина пуста.</p> : null}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.title}</p>
          <button onClick={() => removeFromCart(item.id)}>Удалить</button>
        </div>
      ))}

      {cart.length > 0 && (
        <button className="checkout" onClick={checkout}>
          Оформить заказ
        </button>
      )}
    </div>
  );
}
