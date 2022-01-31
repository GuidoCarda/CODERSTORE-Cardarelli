import React, { useContext } from 'react'
import './CartWidget.css'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  
  const { cart } = useContext(CartContext);

  let cartTotal = 0
  cart.map( item => cartTotal = cartTotal + item.qty )
  
  return (
    <>
      <FaShoppingCart/>
      <span className='cart-total'>{cartTotal}</span>
    </>
  )
}

export default CartWidget
