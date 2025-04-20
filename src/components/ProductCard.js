import '../css/ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  // Проверка на существование product
  if (!product || !product.name) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className="product-card">
      <img
        src={product.image || 'https://via.placeholder.com/150'}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p>{product.description || 'Без описания'}</p>
      <p className="price">Цена: ${product.price || 0}</p>
      <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
    </div>
  );
}

export default ProductCard;