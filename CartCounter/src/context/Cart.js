import { CartContext } from "./CartContext";
import {useContext} from 'react';
export default function useCart(){
    return useContext(CartContext)
}