import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({item, onAdd}) => {
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
          <span  className='item-detail-stock'>Stock disponible: {item.stock}</span>
          <span className='item-detail-price'>${item.price}</span>
        </div>
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/> 
      </div>
    </>
  )
}

export default ItemDetail
