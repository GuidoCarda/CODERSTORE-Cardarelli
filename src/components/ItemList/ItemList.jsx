import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'
import { Link, useParams } from 'react-router-dom';

const ItemList = ({items}) => {

  const { id } = useParams();

  return (
    <>
      <h2 className='item-list-title'>{!id ? 'Productos disponibles' : id }</h2>
      <div className='item-list'>
        {items.map(item=> <Link key={item.id} to={`/item/${item.id}`}><Item  product={item}/></Link>)}
      </div>
    </>
  )
}

export default ItemList
