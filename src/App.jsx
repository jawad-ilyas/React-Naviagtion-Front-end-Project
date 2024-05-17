import React from 'react'
import Home from './Pages/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'



function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App