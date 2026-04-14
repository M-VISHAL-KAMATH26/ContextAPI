import React from 'react'
import { UserContextProvider } from './contexts/User'
import Home from './components/Home'

const App = () => {
  return (
    <UserContextProvider>
      <Home/>
    </UserContextProvider>
  )
}

export default App
