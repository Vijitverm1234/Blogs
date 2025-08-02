import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import SelectPage from './component/SelectPage/SelectPage'
import MainContent from './component/MainContent/MainContent'
import Footer from './component/Footer/Footer'

function App() {
  return(
    <>
    <Navbar></Navbar>
    <SelectPage></SelectPage>
    
    <Footer></Footer>
    </>
  )
}

export default App
