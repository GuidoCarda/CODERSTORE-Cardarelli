import React from 'react'
import './ItemCount.css'  
import { FaMinus, FaPlus } from 'react-icons/fa';

const ItemCount = ( { stock, initial, itemQty, handleAdd, handleRemove, buyingLimit } ) => {
  return (
    <div className="count-container">
      <button className='control-btn' onClick={handleRemove} disabled={itemQty === 1 || stock === 0 }><FaMinus/></button>
      <span>{!stock ? '0' : !itemQty ? initial : itemQty }</span>
      <button className='control-btn'  onClick={handleAdd} disabled={ itemQty === stock || stock === 0 || buyingLimit}><FaPlus/></button>
    </div>
  )
}

export default ItemCount