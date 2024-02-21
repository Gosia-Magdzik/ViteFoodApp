import React from 'react';
import { currencyFormatter } from '../util/formatting';

export const CartItem = ({ name, quantity, price }) => {
  return (
    <li className='cart-item'>
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className='cart-item-actions'>
            <button>-</button>
            <span>{quantity}</span>
            <button>+</button>
        </p>
    </li>
  )
}
