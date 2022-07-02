import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { Store } from './../Store';

const CartScreen = () => {
    const {state, dispatch} = useContext(Store)
    const{
        cart: {cartItems},
    } = state;
    return (
        <div>
            <Helmet>
            <title>Shopping Cart</title>
            </Helmet>
        </div>
    );
};

export default CartScreen;