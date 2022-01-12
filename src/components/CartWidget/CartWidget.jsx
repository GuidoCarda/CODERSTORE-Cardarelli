import React from 'react'
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
  return (
    <>
      <FaShoppingCart/>
      <span className='cart-total'></span>
    </>
  )
}

export default CartWidget
