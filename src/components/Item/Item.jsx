import React from 'react'
import { formatPrice } from '../../helpers'
import './Item.css'

const Item = ({product}) => {
  return (
    <div className='item'>
      <img className='item-img' src={product.pictureURL} alt="" />
      <div className="item-desc">
        <h3 className='item-title'>{product.title}</h3>
        <p>{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}

export default Item
