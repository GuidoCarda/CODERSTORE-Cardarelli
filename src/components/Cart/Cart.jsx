import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../context/CartContext'
import { MdDeleteForever, MdOutlineClose, MdCancelPresentation } from 'react-icons/md'
import './Cart.css'
import { formatPrice } from '../../helpers'

const Cart = () => {
  
  const { removeItem, clear, cart } = useContext(CartContext)

  let cartTotal = 0;
  cart.map(item => cartTotal = cartTotal + (item.price * item.qty))

  console.log(cart)

  return (
    <section>
      <div className='container cart'>    

        <header className='cart-header'>
          <h2 >Carrito de productos</h2>
          {cartTotal ? <button className='btn icon-btn' onClick={clear}><MdDeleteForever/>Limpiar carrito</button> : null}
        </header>
        
        {cartTotal ? <div className='cart-items-wrapper'>
          <div className="cart-items">
            {cart && cart.map( item => {
              return(
                <div key={item.id} className="cart-item">
                  <img src={item?.pictureURL} alt="" className='cart-item-img' />
                  <div className='cart-item-detail'>
                    <div>
                      <Link to={`/item/${item.id}`}><h3 className='cart-item-title'>{item.title}</h3></Link>
                      <p className='cart-item-price'>{formatPrice(item.price)}</p>
                      <p className='cart-item-qty'>x {item.qty}u.</p>
                    </div>
                    <button className='btn-delete' onClick={()=> removeItem(item.id)}><MdOutlineClose/></button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='cart-summary'>
            <div>
              <span>Total: </span>
              <p className='cart-total-price'>{formatPrice(cartTotal)}</p>
            </div>
            <button className='btn btn-span btn-primary'>Finalizar compra</button>
            <Link to='/'>o continua comprando</Link>
          </div>
        </div> : null}

        {!cartTotal && 
          <div className='empty-cart'>  
            <span><MdCancelPresentation/></span>
            <h2>No hay items en el carrito</h2>
            <Link className="cart-link" to='/'>Volver al inicio</Link> 
          </div>
        }

      </div>
    </section>
  )
}

export default Cart
