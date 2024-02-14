import React from 'react';
import { createPortal } from 'react-dom'; 

export const Modal = ({ children, open }) => {
  return (
    createPortal(
    <dialog open={open}>{children}</dialog>, 
    document.getElementById('modal'))
  )
}
