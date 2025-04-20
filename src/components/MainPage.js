import ProductCard from './ProductCard';
import '../css/MainPage.css';

function MainPage({ products, onAddToCart }) {
  if (!products || !Array.isArray(products)) {
    return <div>Нет товаров для отображения</div>;
  }

  return (
    <div className="main-page">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default MainPage;