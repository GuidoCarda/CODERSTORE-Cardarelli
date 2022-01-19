import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import './ItemListContainer.css'
import products from './products'

const ItemListContainer = () => {

  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect( ()=> {
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(products)
      },3000)
    })

    promise.then( response => {
      setItems(response);
      setLoading(false);
    })
  }, [])

  const addToCart = ( count ) => alert(`${count} ${ count > 1 ? 'items agregados' : 'item agregado'} al carrito`)
  
  return (
    <div className="container">
      { loading ? <Loading/> : <ItemList items={items} onAdd={addToCart} />}
    </div>
  )
}

export default ItemListContainer
