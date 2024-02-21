import React from 'react';
import { currencyFormatter } from '../util/formatting';

export const CartItem = ({ name, quantity, price }) => {
  return (
    <li className='catt-item'>
        <p>
            {name} - {quantity} x {currencyFormatter.format(price)}
        </p>
        <p className='catt-item-actions'>
            <button>-</button>
            <span>{quantity}</span>
            <button>+</button>
        </p>
    </li>
  )
}
