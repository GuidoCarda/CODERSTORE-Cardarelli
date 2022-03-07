import React, { useEffect, useRef, useState } from 'react'
import './Dropdown.css'
import {MdKeyboardArrowDown} from 'react-icons/md'

const Dropdown = ({ options, label, value, onChange }) => {

  const [ open, setOpen ] = useState(false)
  const ref = useRef(null)

  useEffect(()=>{
    const toggle = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", toggle)
    return () => document.removeEventListener("click", toggle)
  },[open])
  
  return (
    <div className="dropdown">
      <div className="control" onClick={()=>setOpen((prev)=>!prev)}>
        <div className='selected-value' ref={ref}>{value ? value.name : label}</div>
        <span className={`arrow ${ open ? 'open' : null}`}><MdKeyboardArrowDown/></span>
      </div>

      <div className={`options ${ open ? 'open' : null}`}>
        {options.map((option) => (
          <div 
            onClick={()=>{
              onChange(option)
              setOpen(false)
            }} 
            key={option.id} 
            className={`option ${value?.id === option.id ? "selected" : null}`}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown