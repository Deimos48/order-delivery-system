import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/api";
import { CartContext } from "../context/CartContext";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, []);

  if (!product) return <p>Загрузка...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.title}</h1>

      <img src={product.image} width={400} />

      <p>Цена: {product.price} ₽</p>
      <p>{product.description}</p>

      <button onClick={() => addToCart(product)}>Добавить в корзину</button>
    </div>
  );
}
