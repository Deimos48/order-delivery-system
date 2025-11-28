import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/api";
import { CartContext } from "../context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, [id]);

  if (!product) return <div>Загрузка...</div>;

  return (
    <div className="product-page">
      <img src={product.image_url} alt={product.name} />

      <h2>{product.name}</h2>
      <p>{product.description}</p>

      <strong>{product.price} ₽</strong>

      <button onClick={() => addToCart(product)}>
        Добавить в корзину
      </button>
    </div>
  );
}
