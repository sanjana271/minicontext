import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>{/*so whatever component you will made in this you will get access of usercontextprovider here*/}
      <h1>Context with React</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
