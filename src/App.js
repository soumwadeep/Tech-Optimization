import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'
import Knowmore from './Knowmore'
import Nav from './Nav'
import { Routes, Route , Navigate} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route exact path="/" element ={<Home/>}/>
        <Route exact path="/about" element ={<About/>}/>
        <Route exact path="/service" element ={<Service/>}/>
        <Route exact path="/contact" element ={<Contact/>}/>
        <Route exact path="/knowmore" element ={<Knowmore/>}/>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
