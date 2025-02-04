
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer'

function App() {
   

  return (
    <>
 
     <Navbar/>
   
     <Outlet></Outlet>
   <Footer/>
     
    </>
  )
}

export default App
