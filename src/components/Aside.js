function Aside({ onCategorySelect }) {
  const categories = ['All', 'Laptops', 'Smartphones', 'Accessories', 'Tablets'];

  return (
    <aside>
      <h2>Categories</h2>
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