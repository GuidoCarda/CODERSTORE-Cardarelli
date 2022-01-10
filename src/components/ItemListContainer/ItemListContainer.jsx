import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting}) => {
  return (
    <section className="section">
      <div className="container">
        <h1>{greeting}</h1> 
      </div>
    </section>

  )
}

export default ItemListContainer
