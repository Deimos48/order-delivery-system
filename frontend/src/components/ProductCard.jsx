import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>
      <p>{product.price} ₽</p>

      <button onClick={() => addToCart(product)}>Добавить</button>

      <Link to={`/product/${product.id}`}>Подробнее</Link>
    </div>
  );
}
