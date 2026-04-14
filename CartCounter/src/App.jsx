import React from 'react'
import { CartContextProvider } from './context/CartContextProvider'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <CartContextProvider>
      <Navbar/>
      <ProductCard name="nike" price="20000"/>
            <ProductCard name="puma" price="19000"/>

      <ProductCard name="adidas" price="2150000"/>

    </CartContextProvider>
  )
}

export default App
