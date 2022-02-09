import React, { useContext } from 'react'
import './CartWidget.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
  
  const { cartTotal } = useContext(CartContext)

  return (
    <>
      <AiOutlineShoppingCart/>
      {cartTotal ? <span className='cart-total'>{cartTotal}</span> : null}
    </>
  )
}

export default CartWidget
