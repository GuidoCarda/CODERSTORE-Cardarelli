import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = () => {

  const [items,setItems] = useState([])

  useEffect( ()=> {
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          {
            id: 'dasda1',
            title: 'Logitech g PRO',
            description: 'Esto es una descripcion de ejemplo',
            stock: 5,
            price: 15500,
            pictureURL: 'https://logitechar.vteximg.com.br/arquivos/ids/157593-1000-1000/G733-FOB-Blk.png?v=637358672115100000' 
          },
          {
            id: 'dac1f1',
            title: 'Razer Deathadder',
            description: 'Esto es una descripcion de ejemplo',
            stock: 18,
            price: 15500,
            pictureURL: 'https://www.tera.gt/wp-content/uploads/2021/12/MOUSE-GAMING-ABYSSUS-V2-ESSENTIAL-AMBIDIESTRO-RAZER_Ratones_6763_1.png' 
          },
          {
            id: 'dlwda1',
            title: 'RTX 3080',
            description: 'Esto es una descripcion de ejemplo',
            stock: 3,
            price: 225500,
            pictureURL: 'https://www.pny.eu/data/products/article-large/1526-20210528172558.png' 
          }
          ,{
            id: 'dkhga1',
            title: 'Teclado Redragon',
            description: 'Esto es una descripcion de ejemplo',
            stock: 10,
            price: 15500,
            pictureURL: 'https://www.venex.com.ar/products_images/1601297709_k552rgbsp3512x512.png' 
          },
          {
            id: 'dasda1',
            title: 'Logitech g PRO',
            description: 'Esto es una descripcion de ejemplo',
            stock: 5,
            price: 15500,
            pictureURL: 'https://logitechar.vteximg.com.br/arquivos/ids/157593-1000-1000/G733-FOB-Blk.png?v=637358672115100000' 
          },
          {
            id: 'dac1f1',
            title: 'Razer Deathadder',
            description: 'Esto es una descripcion de ejemplo',
            stock: 18,
            price: 15500,
            pictureURL: 'https://www.tera.gt/wp-content/uploads/2021/12/MOUSE-GAMING-ABYSSUS-V2-ESSENTIAL-AMBIDIESTRO-RAZER_Ratones_6763_1.png' 
          },
          {
            id: 'dlwda1',
            title: 'RTX 2060',
            description: 'Esto es una descripcion de ejemplo',
            stock: 3,
            price: 225500,
            pictureURL: 'https://www.pny.eu/data/products/article-large/1526-20210528172558.png' 
          }
        ])
      },3000)
    })

    promise.then( response => {
      setItems(response);
    })
  })

  const addToCart = ( count ) => alert(`${count} ${ count > 1 ? 'items agregados' : 'item agregado'} al carrito`)
  
  return (
    <div className="container">
      <ItemList items={items} onAdd={addToCart} />
    </div>
  )
}

export default ItemListContainer
