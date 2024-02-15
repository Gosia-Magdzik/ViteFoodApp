import React, { createContext } from 'react';
import { Modal } from './UI/Modal';
import { useContext } from 'react'; 

export const Cart = () => {
    const cartCtx = useContext(createContext);

    return (
        <Modal className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item => )}
            </ul>
        </Modal>
    )
}
