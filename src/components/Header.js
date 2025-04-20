import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header({ cartCount }) {
  return (
    <header>
      <h1>Tech Store</h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/cart">Корзина ({cartCount || 0})</Link>
      </nav>
    </header>
  );
}

export default Header;