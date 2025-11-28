import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} />

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <strong>{product.price} ₽</strong>

      <Link to={`/product/${product.id}`}>Подробнее</Link>
    </div>
  );
}
