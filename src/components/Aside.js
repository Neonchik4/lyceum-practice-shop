import '../css/Aside.css';
import { Link } from 'react-router-dom';

function Aside({ onCategorySelect }) {
  const categories = ['Все', 'Ноутбуки', 'Смартфоны', 'Аксессуары', 'Планшеты'];

  return (
    <aside>
      <h1>Категории</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to="/"
              className="category-item"
              key={category}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
 
 export default Aside;