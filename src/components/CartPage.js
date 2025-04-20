import '../css/CartPage.css';

function CartPage({ cartItems, onRemoveFromCart, totalPrice }) {
  // Проверка на существование и тип cartItems
  if (!cartItems || !Array.isArray(cartItems)) {
    return <div>Корзина пуста или данные недоступны</div>;
  }

  // Проверка на пустую корзину
  if (cartItems.length === 0) {
    return <div className="cart-page">
      <h2>Ваша корзина</h2>
      <p>Корзина пуста</p>
    </div>;
  }

  return (
    <div className="cart-page">
      <h2>Ваша корзина</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <h3>{item.name || 'Без названия'}</h3>
              <p>Цена: ${item.price || 0}</p>
              <p>Количество: {item.quantity || 1}</p>
            </div>
            <button onClick={() => onRemoveFromCart(item.id)}>Удалить</button>
          </div>
        ))}
        <h3>Итого: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default CartPage;