import React, { useState } from 'react'
import './NavBar.css'
import { FaBars } from 'react-icons/fa'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <nav>
      <div className="nav-container">
       <span className='nav-logo'>MISTEC</span>
        <ul className={`nav-links ${isOpen&&'active'}`}>
          <li><a href="/">componentes</a></li>
          <li><a href="/">perifericos</a></li>
          <li><a href="/">notebooks</a></li>
        </ul>
  
        <div className="nav-buttons">
          <button className="toggle-btn" onClick={handleToggle}> <FaBars/> </button>
          <button className="cart-btn"><CartWidget/></button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
