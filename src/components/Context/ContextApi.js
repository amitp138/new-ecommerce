import React,{ createContext,useEffect,useReducer} from 'react'
import { useContext } from 'react'

import { CartReducer } from './Reducers'
const Cart=createContext()
const ContextApi = ({children}) => {
  
    const [state,dispatch]=useReducer(CartReducer,{
       
        cart:[]
    })
   
  return (
    <Cart.Provider value={{state,dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default ContextApi;
export const CartState = () => {
    return useContext(Cart);
  };