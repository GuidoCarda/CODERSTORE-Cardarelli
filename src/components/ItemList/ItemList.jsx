import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './ItemList.css'
import Item from '../Item/Item'
import Dropdown from '../Dropdown/Dropdown';

const ItemList = ({items}) => {

  const { id } = useParams();

  const options = [
    { "name": "mayor precio", id: 0 },
    { "name": "menor precio", id: 1 }
  ]

  const [ filterValue, setFilterValue ] = useState(null)

  useEffect(()=>{
    if(filterValue?.id === 0){
      items.sort((itemA, itemB) => itemA.price  - itemB.price)
    }else{
      items.sort((itemA, itemB) => itemB.price - itemA.price)
    }
  }, [filterValue, items])
 
  const setValue = (val) =>{
    if(val.id !== filterValue?.id){
      setFilterValue(val)
    }
  }
 
  return (
    <>
      <h2 className='item-list-title'>{!id ? 'Productos disponibles' : id }</h2>
      <Dropdown 
        options={options} 
        label='Filtrar por:'
        value={filterValue}
        onChange={val => setValue(val)} 
      />
      <div className='item-list'>
        {items.map(item=> <Link key={item.id} to={`/item/${item.id}`}><Item  product={item}/></Link>)}
      </div>
    </>
  )
}

export default ItemList
