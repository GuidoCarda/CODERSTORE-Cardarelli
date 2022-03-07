import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {doc,getDoc} from 'firebase/firestore'
import { db } from '../../firebase'
import './ItemDetailContainer.css'
import Loading from '../Loading/Loading'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item,setItem] = useState({})
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const getItem = async ()=>{
      const itemRef = doc(db, "items", `${id}`)
      const itemSnapshot = await getDoc(itemRef)

      setItem({id: itemSnapshot.id, ...itemSnapshot.data()})
    }
    getItem()
    setTimeout(()=>setLoading(false),1000)
  },[id])

  return (
    <div className="container item-detail">    
      { loading ? <Loading/> : <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer
