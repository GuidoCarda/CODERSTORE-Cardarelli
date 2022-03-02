import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'
import './ItemListContainer.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

const ItemListContainer = () => {
  
  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(true)
  
  const { id } = useParams();

  useEffect( ()=> {
    setLoading(true);
    
    const getItems = async ()=>{
      let collectionQuery
      if(!id){
        collectionQuery = collection(db, "items")
      }else{
        collectionQuery = query(collection(db, "items"), where('category', '==', `${id}`))
      }
      const snapshot = await getDocs(collectionQuery);
      setItems( snapshot.docs.map( itemSnapshot => ({id: itemSnapshot.id, ...itemSnapshot.data()})) )
    }

    getItems()
    
    setTimeout(()=>(setLoading(false)), 1000)
  }, [id])  
  
  return (
    <div className="container">
      { loading ? <Loading/> : <ItemList items={items}/> }
    </div>
  )
}

export default ItemListContainer
