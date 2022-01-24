import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import { Link } from 'react-router-dom';

const ItemList = ({items, onAdd}) => {
  return (
    <>
      <h2 className='item-list-title'>Productos disponibles</h2>
      <div className='item-list'>
        {items.map(item=> <Link key={item.id} to={`/item/${item.id}`}><Item  product={item} onAdd={onAdd}/></Link>)}
      </div>
    </>
  )
}


export default ItemList
