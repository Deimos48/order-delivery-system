import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 15,
        width: 240,
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", borderRadius: 6 }}
      />

      <h3>{product.title}</h3>
      <p>{product.price} ₽</p>

      <button onClick={() => addToCart(product)}>Добавить в корзину</button>

      <br />
      <Link to={`/product/${product.id}`}>Подробнее</Link>
    </div>
  );
}
