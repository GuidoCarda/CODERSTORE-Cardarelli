import React, { useState, useEffect }   from 'react'
import './ItemCount.css'  
import { FaMinus, FaPlus } from 'react-icons/fa';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);  

  useEffect(()=>setCount(initial),[initial])

  const addItem = () => setCount(count + 1)
  const removeItem = () => setCount(count - 1)
  
  return (
    <div className="itemcount-container">
      <h3>Nombre de producto</h3>
      <div className="count-container">
        <button className='control-btn' onClick={removeItem} disabled={count === 0}><FaMinus/></button>
        <span>{count}</span>
        <button className='control-btn'  onClick={addItem} disabled={ count === stock || stock === 0}><FaPlus/></button>
      </div>
      <button className="item-btn"  disabled={ count === 0 || stock === 0} onClick={ () => onAdd(count) }>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
