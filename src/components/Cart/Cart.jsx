import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../context/CartContext'
import { MdOutlineClose } from 'react-icons/md'
import './Cart.css'

const Cart = () => {
  
  const { removeItem, clear, cart } = useContext(CartContext)

  let cartTotal = 0;
  cart.map(item => cartTotal = cartTotal + (item.price * item.qty))

  const formatPrice = (price) =>{ 
    const config = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    return config.format(price)
  }

  return (
    <div className='container cart'>
      <header className='cart-header'>
        <h2>Carrito de productos</h2>
        {cartTotal ? <button className='btn' onClick={clear}>Limpiar carrito</button> : null}
      </header>
      {cartTotal ? <div className='cart-items-wrapper'>
        <div className="cart-items">
          {cart && cart.map( item => {
            return(
              <div key={item.id} className="cart-item">
                <div className='cart-item-detail'>
                  <img src={item.pictureURL} alt="" className='cart-item-img' />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Cantidad: {item.qty}</p>
                  </div>
                  <p>{formatPrice(item.price)}</p>
                </div>
                <button onClick={()=> removeItem(item.id)}><MdOutlineClose/></button>
              </div>
            )
          })}
        </div>
        <div className='cart-summary'>
          <h3>Resumen de compra</h3>
          <div>
            <span>Total: </span>
            <p className='cart-total-price'>{formatPrice(cartTotal)}</p>
          </div>
          <button className='btn btn-span'>Finalizar compra</button>
          <Link to='/'>o continua comprando</Link>
        </div>
        
      </div> : null}
      {!cartTotal && 
        <div className='empty-cart'>  
          <h2>No hay items en el carrito</h2>
          <Link className="cart-link" to='/'>Volver al inicio</Link> 
        </div>
      }
    </div>
  )
}

export default Cart
