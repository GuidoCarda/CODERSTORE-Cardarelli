import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../context/CartContext'
import './Cart.css'

const Cart = () => {
  
  const { removeItem, clear, cart } = useContext(CartContext)

  let cartTotal = 0;
  cart.map(item => cartTotal = cartTotal + (item.price * item.qty))
  console.log(cart)

  const formatPrice = (price) =>{ 
    const config = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })

    return config.format(price)
  }

  return (
    <div className='container cart-list'>
      <header className='cart-header'>
        <h2>Carrito de productos</h2>
        <button onClick={clear}>Limpiar carrito</button>
      </header>
      <div className="cart-items">
        {cart && cart.map( item => {
          return(
            <div key={item.id} className="cart-item">
              <div className='cart-item-detail'>
                <img src={item.pictureURL} alt="" className='cart-item-img' />
                <h3>{item.title}</h3>
                <p>Cantidad: {item.qty}</p>
                <p>P. unitario: {formatPrice(item.price)}</p>
                <p>P. total: {formatPrice(item.price * item.qty)}</p>
              </div>
              <button onClick={()=> removeItem(item.id)}>x</button>
            </div>
          )
        })}
      </div>
      
      {cartTotal ? <h2>Total del carrito {formatPrice(cartTotal)}</h2> : null }
      <Link className="cart-link" to='/'>Volver al inicio</Link>
    </div>
  )
}

export default Cart
