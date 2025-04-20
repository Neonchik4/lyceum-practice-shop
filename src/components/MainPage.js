import ProductCard from "./ProductCard";

function MainPage({ products, onAddToCart }) {
  console.log('Products:', products);
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