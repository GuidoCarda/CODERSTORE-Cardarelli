import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../ItemListContainer/products'
import Loading from '../Loading/Loading'
import './ItemDetailContainer.css'

const ItemDetailContainer = ({onAdd}) => {
  
  const getItem = () => {
    return new Promise( (resolve,reject) => {
      setTimeout(() => {
        resolve(products[3]) /* Selecciono un producto de mi array de products */
      }, 2000); 
    })
  }
  
 
  const [item,setItem] = useState({})
  const [loading,setLoading] = useState(true)
 
  useEffect(() => {
    getItem().then( response => {
      setItem(response)
      setLoading(false)
    })
  }, [])

  return (
    <div className="container item-detail">    
      { loading ? <Loading/> : <ItemDetail item={item} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetailContainer
