import React, { useState } from 'react'
import './NavBar.css'
import { FaBars   } from 'react-icons/fa'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <nav>
      <div className="nav-container">
       <span className='nav-logo'><NavLink to="/">MISTEC</NavLink></span>
        <ul className={`nav-links ${isOpen&&'active'}`}>
          <li><NavLink onClick={handleToggle} to='/category/componentes'>componentes</NavLink></li>
          <li><NavLink onClick={handleToggle} to='/category/perifericos' >perifericos</NavLink></li>
          <li><NavLink onClick={handleToggle} to='/category/notebooks' >notebooks</NavLink></li>
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
