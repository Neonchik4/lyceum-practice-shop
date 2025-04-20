import '../css/CartPage.css';

function CartPage({ cartItems, onRemoveFromCart, totalPrice }) {
  return (
    <div className="cart-page">
      <h2>Ваша корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
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
      )}
    </div>
  );
}

export default CartPage;