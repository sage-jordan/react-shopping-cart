import React, { useState } from "react";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import data from "./data";

// Context
import { CartContext } from "./contexts/CartContext";
import { ProductContext } from "./contexts/ProductContext";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(data);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = item => {
    // console.log(item.id);
    setCart(cart.filter(obj => obj.id !== item.id));
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
