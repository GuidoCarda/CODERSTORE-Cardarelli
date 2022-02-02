import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item}) => {

  const [ itemQty, setItemQty ] = useState(0)

  const { addItem } = useContext(CartContext)

  const onAdd = (quantityToAdd) =>{
    setItemQty(quantityToAdd)
    addItem(item,quantityToAdd)
  }

  // Para simular al actualización de stock
  useEffect(() => {
    item.stock = item.stock - itemQty
  },[item, itemQty])

  console.log('detail rendered')

  return (
    <>
      <div className="item-detail-img">
        <img
        src={item.pictureURL}
        alt=""
        />
      </div>

      <div className="item-detail-info">
        <span className={`item-detail-category ${item.category}`}>{item.category}</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div>
          <span  className='item-detail-stock'>Stock disponible: {item.stock - itemQty}</span>
          <span className='item-detail-price'>${item.price}</span>
        </div>
          { itemQty === 0 
              ? <ItemCount stock={item.stock} initial={ item.stock ? 1 : 0} onAdd={onAdd}/> 
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
