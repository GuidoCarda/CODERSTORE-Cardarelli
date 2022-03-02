import React
 from 'react'
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

/* const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);  

  useEffect(()=>setCount(initial),[initial])

  const addItem = () => setCount(count + 1)
  const removeItem = () => setCount(count - 1)

  return (
    <div className="itemcount-container">
      <div className="count-container">
        <button className='control-btn' onClick={removeItem} disabled={count === 1 || stock === 0 }><FaMinus/></button>
        <span>{count}</span>
        <button className='control-btn'  onClick={addItem} disabled={ count === stock || stock === 0}><FaPlus/></button>
      </div>
      <button className="item-btn"  disabled={ count === 0 || stock === 0} onClick={ () => onAdd(count) }>Agregar al carrito</button>
    </div>
  )
}
*/