import React, { useState, createContext } from 'react';
import data from '../data';

export const CartContext = createContext();

export const CartProvider = props => {
    const [cart, setCart] = useState(data);

    return (
        <CartContext.Provider cart={cart} setCart={setCart}>
            {props.children}
        </CartContext.Provider>
    );
};