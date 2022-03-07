import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineUser } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <nav>
      <div className="nav-container">
        <div>
          <button className="nav-btn toggle-btn" onClick={handleToggle}> <FaBars/> </button>
          <span className='nav-logo'><NavLink to="/">MISTEC</NavLink></span>
        </div>
        <ul className={`nav-links ${isOpen&&'active'}`}>
          <li><NavLink onClick={handleToggle} to='/category/componentes'>Componentes</NavLink></li>
          <li><NavLink onClick={handleToggle} to='/category/perifericos' >Perifericos</NavLink></li>
          <li><NavLink onClick={handleToggle} to='/category/notebooks' >Notebooks</NavLink></li>
        </ul>
  
        <div className="nav-buttons">
          <NavLink to='/userProfile' className="nav-btn"><AiOutlineUser/></NavLink>
          <NavLink to='/cart' className="nav-btn"><CartWidget/></NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
