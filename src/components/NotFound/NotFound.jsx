import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <section className='container not-found'>
      <div className='not-found-container'>
        <h2>Lo sentimos, la pagina ingresado no existe</h2>
        <Link to='/'>Volver al inicio</Link>
      </div>
    </section>
  )
}

export default NotFound
