import React from 'react'
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
  return (
    <>
      <FaShoppingCart/>
      <span className='cart-total'>2</span>
    </>
  )
}

export default CartWidget
