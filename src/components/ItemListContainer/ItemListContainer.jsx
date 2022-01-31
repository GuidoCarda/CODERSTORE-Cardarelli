import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import './ItemListContainer.css'
import products from './products'

const ItemListContainer = () => {
  
  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(false)
  
  const { id } = useParams();

  useEffect( ()=> {
    setLoading(true);
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(products)
      },500)
    })

    promise.then( response => {
      setItems( id ? response.filter( item => item.category === id ) : response);
      setLoading(false);
    })
  }, [id])

  const addToCart = ( count ) => alert(`${count} ${ count > 1 ? 'items agregados' : 'item agregado'} al carrito`)
  
  return (
    <div className="container">
      { loading ? <Loading/> : <ItemList items={items} onAdd={addToCart} />}
    </div>
  )
}

export default ItemListContainer
