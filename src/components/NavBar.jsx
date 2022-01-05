import React, { useState } from 'react'
import './NavBar.css'
import { FaBars, FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <button className="toggle-btn" onClick={()=>setIsOpen(!isOpen)}> <FaBars/> </button>
          <button className="cart-btn"><FaShoppingCart/> </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
