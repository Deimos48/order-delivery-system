import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.title} className="product-img" />
      </div>

      <h3 className="product-title">{product.title}</h3>
      <p className="product-desc">{product.description}</p>

      <div className="product-bottom">
        <span className="product-price">{product.price} ₽</span>

        <Link to={`/product/${product.id}`} className="product-btn">
          Подробнее →
        </Link>
      </div>
    </div>
  );
}
