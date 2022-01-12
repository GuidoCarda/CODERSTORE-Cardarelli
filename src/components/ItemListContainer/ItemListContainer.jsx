import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const addToCart = ( count ) => alert(`${count} ${ count > 1 ? 'items agregados' : 'item agregado'} al carrito`)
  return (
    <section className="section">
      <div className="container grid-center">
        <ItemCount stock={15} initial={0} onAdd={addToCart}/>
      </div>
    </section>

  )
}

export default ItemListContainer
