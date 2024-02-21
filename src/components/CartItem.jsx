import React from 'react'

export const CartItem = ({ item }) => {
  return (
    <li className='catt-item'>
        <p>
            NAME - QTY x PRICE
        </p>
        <p className='catt-item-actions'>
            <button>-</button>
            <span>QTY</span>
            <button>+</button>
        </p>
    </li>
  )
}
