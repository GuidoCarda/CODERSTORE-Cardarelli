import React, { useEffect } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import './Modal.css'

const Modal = ({children, header}) => {

  //To avoid page scroll when the modal is open
  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    return ()=>{
      document.body.style.overflow = 'auto';
    }
  },[])

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {header &&<div className="modal-header">
          <button className='modal-closebtn'><MdOutlineClose/></button>
        </div>}
      {children}
      </div>
    </div>
  )
}

export default Modal