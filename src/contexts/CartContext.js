import React, { useState, createContext } from 'reacct';
import data from '../data';

export const CartContext = createContext();

export const CartProvider = props => {
    const [cart, addCartItem] = useState(data);

    return (
        <CartContext.Provider value={{ cart, addCartItem }}>
            {props.children}
        </CartContext.Provider>
    );
};