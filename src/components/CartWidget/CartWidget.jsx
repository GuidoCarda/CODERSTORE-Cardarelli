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
      {cartTotal ? <span className='cart-total'>{cartTotal}</span> : null}
    </>
  )
}

export default CartWidget
