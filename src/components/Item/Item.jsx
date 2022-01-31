import React from 'react'
import './Item.css'

const Item = ({product}) => {
  return (
    <div className='item'>
      <img className='item-img' src={product.pictureURL} alt="" />
      <div className="item-desc">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </div>
  )
}

export default Item
