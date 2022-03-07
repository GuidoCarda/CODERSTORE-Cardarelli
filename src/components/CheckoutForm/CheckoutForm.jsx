import React, { useContext, useState } from 'react'

import { CartContext } from '../../context/CartContext'
import { addDoc, collection, doc, Timestamp, writeBatch } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

import { formatDate, formatPrice, validateEmail } from '../../helpers';

import './CheckoutForm.css'
import { AiFillCheckCircle } from 'react-icons/ai';

import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';

const CheckoutForm = () => {

  const { cart , clear, addOrder } = useContext(CartContext);

  const defaultValues = {name: '', phone: '',email: ''}
  const [loading,setLoading] = useState(false)
  const [ buyer, setBuyer ] = useState(defaultValues);
  const [ formErrors, setFormErrors ] = useState({});
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({
      ...buyer,
      [name] : value
    });
  }

  const checkoutTotal = cart.reduce( (acum, item) => {
    return acum + item.price * item.qty 
  }, 0)

  const validateInfo = (values) => {
    let errors = {}

    if(!values.fullname){
      errors.fullname = 'Campo nombre vacio'
    }
    if(!values.phone){
      errors.phone = 'Campo numero vacio'
    }else if(values.phone.length < 8 || values.phone.length > 10 ){
      errors.phone = 'Ingrese un numero entre 8 y 10 caracteres'   
    }
    if(!values.email){
      errors.email = 'Campo email vacio'
    }else if(!validateEmail(values.email)){
      errors.email = 'Ingrese un email valido'
    }
    return errors
  }

  const updateStocks = () => {
    const batch = writeBatch(db)
    cart.forEach( item => {
      if(item.qty !== 0){
        const docRef = doc(db, 'items', item.id)
        batch.update(docRef, {stock: item.stock - item.qty})
      }
    })

    batch
    .commit()
    .then(()=> {
      setIsSubmitted(true)
    })
    .catch(e => console.log(e))
  }

  const checkout = e =>{
    e.preventDefault()
    const errors = validateInfo(buyer);
    setFormErrors(errors);
    
    if(Object.keys(errors).length === 0) {
      setLoading(true)
      const itemsToBuy = cart.map( item => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          qty: item.qty
        }
      })

      const dateTimestamp = formatDate(Timestamp.fromDate( new Date() ).toDate());
    
      const order = { 
        items: itemsToBuy,
        buyer: buyer, 
        date: dateTimestamp,
        total: checkoutTotal
      }; 

      addDoc( collection(db, "orders"), order)
      .then(doc=>{
        console.log('Compra exitosa, el id de la orden es', doc.id)
        const orderId = doc.id;
        updateStocks()
        addOrder(order, orderId)
        clear()
        setLoading(false)
      })
      .catch(err=>{
        console.error(err)
      })
    }

    
  }

  return (
    <>
      {loading ? <Loading/> : 
      <div className='container checkout'>
        <form className='checkout-form' onSubmit={checkout} >
          <div className='checkout-header'>
          <h2>Ya casi terminamos!</h2>
          <p>Completa con tus datos para finalizar la compra</p>
          </div>
          <div className="form-field">
            <label>Nombre completo</label>
            <input 
              type="text" 
              name="fullname"
              value={buyer.fullname || ''}
              onChange={handleChange}
            />
            { formErrors.fullname && <span className='form-error'>{formErrors.fullname}</span> }
          </div>
          <div className="form-field">
            <label>Telefono/Celular</label>
            <input 
              type="number" 
              name="phone"
              value={buyer.phone || ''}
              onChange={handleChange}
              placeholder={'xxx xxxxxx'}
              min='0'
            />
            { formErrors.phone && <span className='form-error'>{formErrors.phone}</span> }
          </div>
          <div className="form-field">
            <label>Email</label>
            <input 
              type="text" 
              name="email"
              value={buyer.email || ''}
              onChange={handleChange}
            />
            { formErrors.email && <span className='form-error'>{formErrors.email}</span> }
          </div>
        
          <div className='checkout-total'>
            <p>Total</p>
            <span>{formatPrice(checkoutTotal)}</span>
          </div>
  
          <button type='submit' className='btn btn-span btn-primary'>Finalizar compra</button>
        </form>
      </div>
    }
  
      {isSubmitted &&<Modal 
        header={false}
      >
        <div className="modal-content">
          <span className="success-icon"><AiFillCheckCircle/></span>
          <h2 className='modal-title'>Compra exitosa</h2>
          <p className='modal-subheader'>Tu compra fue realizada con exito</p>
          <p>El id de tu compra es: <span className='modal-order-id'>d134141414124</span></p>
        </div>
        <div className="modal-actions">
          <Link to='/' className='btn'>seguir comprando</Link>
          <Link to='/userProfile'  className='btn btn-primary'>mis ordenes</Link>
        </div>
      </Modal>}
    </>
    )

}

export default CheckoutForm


/*


*/ 