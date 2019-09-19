import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import { CartContext } from './contexts/CartContext';

function App() {
	const [cart, setCart] = useContext(CartContext);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<Navigation />

			{/* Routes */}
			<Route exact path="/" component={Products} />
			<Route path="/cart" render={() => <ShoppingCart cart={cart} addItem={addItem} />} />
		</div>
	);
}

export default App;
