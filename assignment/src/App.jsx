// import { useState } from 'react'

import './App.css'
import HeaderImage from './components/HeaderImage/HeaderImage'
import NavBar from './components/NavBar/NavBar'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ImagePages from './pages/ImagePages'

function App() {

  return (
    <>
    <nav className=' position-fixed top-0  z-1 w-100' > <NavBar/></nav>
    <header className='mt-3'><HeaderImage/></header>
    <ImagePages/>
    <ScrollToTop/>
    
    
    </>
  )
}

export default App
