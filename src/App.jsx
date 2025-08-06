import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import SelectPage from './component/SelectPage/SelectPage'
import MainContent from './component/MainContent/MainContent'
import Footer from './component/Footer/Footer'
import {Routes,Route} from 'react-router-dom'
import Project from './component/Project/Project'
function App() {
  return(
    <>
    <Navbar></Navbar>
    {/* <SelectPage></SelectPage> */}
    <Routes>
      <Route path="/select" element={<SelectPage></SelectPage>}></Route>
      <Route path="/project" element={<Project></Project>}></Route>

    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
