import React, { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../store/CartContext';

export const Checkout = () => {
    useContext(CartContext);

  return (
    <Modal>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: </p>
        </form>
    </Modal>
  )
}
