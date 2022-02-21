import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
  
  //Guardar el CartContext en localStorage
  const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? []
  const setLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data)) 
  
  const initializeLocalStorage = (key)=> {
    const localData = getLocalStorage(key)
    return localData || []
  }

  const [ cart, setCart ] = useState(()=> initializeLocalStorage('cart') )
  const [ orders, setOrders ] = useState(()=> initializeLocalStorage('orders') )

  useEffect(()=>{
    setLocalStorage('cart', cart);
    setLocalStorage('orders', orders);
  },[cart, orders])

  let cartTotal = 0
  cart.map( item => cartTotal = cartTotal + item.qty )

  //Agregar cierta cantidad de un item al carrito
  const addItem = ( item, qty ) => {        
    if(isInCart(item.id)){
      return setCart( cart
        .map( cartItem => cartItem.id === item.id 
          ? {...cartItem, qty : cartItem.qty + qty} 
          : cartItem )
      )
    }

    setCart([...cart, {...item, qty}])
  }

  //Remover un item del cart segun su id
  const removeItem = ( itemId ) => {
    setCart( cart.filter( item => item.id !== itemId) )
  }

  //Remover todos los items
  const clear = () => setCart([])

  //true / false - checkear si esta en el carrito
  const isInCart = (id) => cart.find( item => item.id === id )

  const addOrder = ( orderData, orderId) => { setOrders([...orders, {...orderData, orderId: orderId}]) }
  const clearOrders = () => setOrders([])

  return (
    <CartContext.Provider value={{addItem, removeItem, clear, cart, cartTotal, orders, addOrder, clearOrders}}>
      {children}
    </CartContext.Provider>
  )
}

