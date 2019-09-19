import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import { CartContext } from './contexts/CartContext';

function App() {
	// const [cart, setCart] = useContext(CartContext);

	// const addItem = item => {
	// 	setCart([...cart, item]);
	// };

	return (
		<div className="App">
			<Navigation />

			{/* Routes */}
			<Route exact path="/" component={Products} />
			<Route path="/cart"component={ShoppingCart} />
		</div>
	);
}

export default App;
