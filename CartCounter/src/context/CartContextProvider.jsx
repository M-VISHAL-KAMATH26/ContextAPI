import {useState} from 'react';
import { CartContext } from './CartContext';
export const CartContextProvider = ({children})=>{
    const [cartcount,setCartcount]=useState(0);
    return (
        <CartContext.Provider value={{cartcount,setCartcount}}>

        {children}
        </CartContext.Provider>

    )
}