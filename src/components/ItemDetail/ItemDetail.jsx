import React, { useState, useEffect, useContext, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { formatPrice } from '../../helpers'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item}) => {

  const [ itemQty, setItemQty ] = useState(1)
  const [ isAdded, setIsAdded ] = useState(false)
  const [ buyingLimit, setBuyingLimit ] = useState(false)

  const { addItem, isInCart } = useContext(CartContext)
  
  const handleAdd = () => setItemQty( itemQty + 1)
  const handleRemove = () => setItemQty( itemQty - 1 )

  const onAdd = (quantityToAdd) =>{
    setItemQty(quantityToAdd)
    addItem(item,quantityToAdd)
    setIsAdded(!isAdded)
  }

  const cartItem = isInCart(item.id);
  const limitBuy = useCallback(()=>{
    
    if(cartItem !== undefined){
      if(cartItem.qty + itemQty >= item.stock){
        setBuyingLimit(true)
      }else{
        setBuyingLimit(false)
      }
    }
  }, [cartItem, item.stock, itemQty])

  useEffect(()=>{
   limitBuy() 
  },[limitBuy])

  return (
    <>
      <div className="item-detail-img">
        <img
        src={item?.pictureURL}
        alt=""
        />
      </div>

      <div className="item-detail-info">
        <span className={`item-detail-category ${item.category}`}>{item.category}</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div>
          <span  className='item-detail-stock'>{`Stock disponible: ${!cartItem ? item.stock : item.stock - cartItem.qty }`}</span>
          <span className='item-detail-price'>{formatPrice(item.price)}</span>
        </div>
          { !isAdded 
              ? <div className="item-count-container">
                  <ItemCount 
                    stock={item.stock}
                    initial={item.stock !== 0 ? 1 : 0}
                    itemQty={itemQty}
                    handleAdd={handleAdd}
                    handleRemove={handleRemove}
                    buyingLimit={buyingLimit}
                  /> 
                  <button 
                    className="item-btn"  
                    disabled={ itemQty === 0 || item.stock === 0  || cartItem?.qty === item.stock} 
                    onClick={ () => onAdd(itemQty) }
                  >
                    {'Agregar al carrito'}
                  </button>
                </div>
              : <>
                <Link 
                  to={'/cart'}
                  className="to-cart-btn"
                  >  
                  Ir al carrito
                </Link>
                <Link 
                  to={'/'}
                  className="to-home-btn"
                  >  
                  Seguir comprando
                </Link>
              </>
          } 
      </div>
    </>
  )
}

export default ItemDetail