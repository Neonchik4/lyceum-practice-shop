import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import MainPage from './components/MainPage';
import CartPage from './components/CartPage';

import laptopImage from './assets/images.jpg';

function App() {
    const categories = ['Все', 'Ноутбуки', 'Смартфоны', 'Аксессуары', 'Планшеты'];
    const [cartItems, setCartItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const products = [
        { id: 1, name: 'Ноутбук', price: 500, category: 'Ноутбуки', description: 'Мощный ноутбук для работы', 
            image: laptopImage },
        { id: 2, name: 'Смартфон', price: 300, category: 'Смартфоны', description: 'Современный смартфон', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Наушники', price: 50, category: 'Аксессуары', description: 'Беспроводные наушники', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Планшет', price: 400, category: 'Планшеты', description: 'Компактный планшет', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Смарт-часы', price: 200, category: 'Аксессуары', description: 'Смарт-часы с функцией фитнес-трекинга', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Монитор', price: 250, category: 'Аксессуары', description: '4K монитор', image: 'https://via.placeholder.com/150' },
    ];

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);
    };

  const handleAddToCart = (product) => {
    if (!product || !product.id) {
      console.error('Invalid product:', product);
      return;
    }

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory && selectedCategory !== categories[0]
      ? products.filter((product) => product && product.category === selectedCategory)
      : products;

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Aside onCategorySelect={handleCategorySelect} />
        <div style={{ flex: 1 }}>
          <Header cartCount={cartItems.reduce((total, item) => total + (item.quantity || 0), 0)} />
          <Routes>
            <Route
              path="/"
              element={
                <MainPage products={filteredProducts} onAddToCart={handleAddToCart} />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  onRemoveFromCart={handleRemoveFromCart}
                  totalPrice={calculateTotalPrice()}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;