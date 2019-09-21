import React, { useContext, useState } from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import data from './data';

// Context
import { CartContext } from './contexts/CartContext';
import { ProductContext } from './contexts/ProductContext';

function App() {
	const [cart, setCart] = useState(data);
	const [products, setProducts] = useState(data);
	
	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
                <CartContext.Provider value={{ cart }}>
					
					<Navigation />

					{/* Routes */}
					<Route exact path="/" component={Products} />
					<Route path="/cart"component={ShoppingCart} />

				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
