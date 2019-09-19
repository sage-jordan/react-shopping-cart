import React, { useState, createContext } from 'react';
import data from '../data';

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [products, addItem] = useState(data);

    return (
        <ProductContext.Provider value={[ products, addItem ]}>
            {props.children}
        </ProductContext.Provider>
    );
};