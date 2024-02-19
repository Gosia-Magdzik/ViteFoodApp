import React, { createContext } from 'react';
import { Modal } from './UI/Modal';
import { useContext } from 'react'; 
import { currencyFormatter } from '../util/formatting';
import { Button } from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';

export const Cart = () => {
    const cartCtx = useContext(createContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    return (
        <Modal 
            className="cart"
            open={userProgressCtx.progress === 'cart'}
        >
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item => 
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                    </li>
                )}
            </ul>
            <p className='cart-total'>
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className='modal-actions'>
                <Button textOnly>Close</Button>
                <Button>Go to Checkout</Button>
            </p>
        </Modal>
    )
}
