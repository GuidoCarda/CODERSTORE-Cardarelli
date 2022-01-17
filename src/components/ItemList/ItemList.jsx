import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({items, onAdd}) => {
  return (
    <>
      <h2 className='item-list-title'>Productos disponibles</h2>
      <div className='item-list'>
        {items.map(item=> <Item key={item.id} product={item} onAdd={onAdd}/>)}
      </div>
    </>
  )
}


export default ItemList
