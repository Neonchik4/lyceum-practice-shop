import '../css/Aside.css';

function Aside({ onCategorySelect }) {
  const categories = ['Все', 'Ноутбуки', 'Смартфоны', 'Аксессуары', 'Планшеты'];

  return (
    <aside>
      <h1>Категории</h1>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onCategorySelect && onCategorySelect(category)}
            className="category-item"
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Aside;