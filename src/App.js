import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import MainPage from './components/MainPage';
import CartPage from './components/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, name: 'Laptop', price: 500, category: 'Laptops', description: 'Powerful laptop for work', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Smartphone', price: 300, category: 'Smartphones', description: 'Modern smartphone', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Headphones', price: 50, category: 'Accessories', description: 'Wireless headphones', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Tablet', price: 400, category: 'Tablets', description: 'Compact tablet', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Smartwatch', price: 200, category: 'Accessories', description: 'Smartwatch with fitness tracking', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Monitor', price: 250, category: 'Accessories', description: '4K monitor', image: 'https://via.placeholder.com/150' },
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
    selectedCategory && selectedCategory !== 'All'
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