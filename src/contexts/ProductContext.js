import React, { useState, createContext } from 'reacct';
import data from '../data';

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [product, addItem] = useState(data);

    return (
        <ProductContext.Provider value={[product, addItem ]}>
            {props.children}
        </ProductContext.Provider>
    );
};