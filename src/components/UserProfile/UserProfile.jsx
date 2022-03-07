import React, { useContext } from 'react'
import { MdCancelPresentation, MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { formatPrice } from '../../helpers'
import './UserProfile.css'

const UserProfile = () => {

  const { orders, clearOrders } = useContext(CartContext)

  return (
    <div className='container user-profile'>

      <div className='orders-header'>
        <h2 className='orders-title'>Tus compras</h2>
        {orders.length !== 0 ? <button className='btn icon-btn' onClick={clearOrders}><MdDeleteForever/>Vaciar ordenes</button> : null}
      </div>

      {orders.length === 0  
        ? <div className='empty-orders'>        
            <span><MdCancelPresentation/></span>
            <h2 >Aun no tienes ninguna orden</h2>
            <Link to='/'>Seguir comprando</Link>
          </div>

        : <>
            <div className="orders-table-container">
              <table className='orders-table'>
                <thead>
                  <tr className='orders-table-header'>
                    <th>fecha</th>
                    <th>codigo</th>
                    <th>productos</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    orders.map( order => {
                      return(
                      <tr className='order' key={order.orderId}>
                        <td className='order-date'>{order.date}</td>
                        <td className='order-id'>{order.orderId}</td>
                        <td className='order-items'>
                          {order.items.map( ({title, qty}) => {
                            return <p key={title} className='order-item'><span>{qty}x </span>{title}</p>
                          })} 
                        </td>
                        <td className='order-price'>{formatPrice(order.total)}</td>
                      </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </>
      }
      
    </div>
  )
}

export default UserProfile