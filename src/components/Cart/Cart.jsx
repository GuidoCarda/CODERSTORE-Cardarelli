import React from 'react'
import './Cart.css'

const Cart = () => {

  //A modo de mock temporal
  return (
    <div className='container cart-list'>
      <h2>Carrito de productos</h2>
      <div className="cart-item">
        <div>
          <h3>Teclado redragon</h3>
          <p>Cantidad: 2 unidades</p>
        </div>
        <button>x</button>
      </div>
    </div>
  )
}

export default Cart
