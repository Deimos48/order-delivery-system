import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Каталог</Link>
        <Link to="/cart">Корзина</Link>
        <Link to="/orders">Мои заказы</Link>
      </nav>
    </header>
  );
}
