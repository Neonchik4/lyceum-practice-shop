import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header style={{ padding: '10px', background: '#f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
      <h1>Мой магазин</h1>
      <nav>
        <Link to="/" style={{ marginRight: '20px' }}>Главная</Link>
        <Link to="/cart">Корзина ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;