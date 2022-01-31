import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([])

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

  return (
    <CartContext.Provider value={{addItem, removeItem, clear, cart}}>
      {children}
    </CartContext.Provider>
  )
}

