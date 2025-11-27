import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        gap: 20,
        padding: 20,
        background: "#222",
        color: "#fff",
      }}
    >
      <Link to="/" style={{ color: "white" }}>Каталог</Link>
      <Link to="/cart" style={{ color: "white" }}>Корзина</Link>
      <Link to="/orders" style={{ color: "white" }}>Мои заказы</Link>
    </header>
  );
}
