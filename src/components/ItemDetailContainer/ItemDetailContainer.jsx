import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../ItemListContainer/products'
import Loading from '../Loading/Loading'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  
  const getItem = (id) => {
    return new Promise( (resolve,reject) => {
      setTimeout(() => {
        resolve(products.find( item => item.id === id ))
      }, 2000); 
    })
  }

  const { id } = useParams();
  
  const [item,setItem] = useState({})
  const [loading,setLoading] = useState(true)
 
  useEffect(() => {
    getItem(id).then( response => {
      setItem(response)
      setLoading(false)
    })
  }, [id])

  return (
    <div className="container item-detail">    
      { loading ? <Loading/> : <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer
