import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Каталог товаров</h1>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
