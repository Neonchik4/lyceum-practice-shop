function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '30%', margin: '10px' }}>
      <img src="https://via.placeholder.com/150" alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Цена: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
    </div>
  );
}

export default ProductCard;