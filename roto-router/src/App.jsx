import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';


function App() {

  return (
    <div className='App'>
      <Router>
        <div className='nav'>
          <h1>Roto Plumbing</h1>
          <nav className='navbar'>
          <Link className='navLink' to='/'>Home</Link>
          <Link className='navLink' to='/about'>About</Link>
          <Link className='navLink' to='/services'>Services</Link>
          <Link className='navLink' to='/contact'>Contact</Link>
        </nav>
        </div>
        

        <footer>
        {/* <Link className='navLink' to='/about'>About</Link>
        <Link className='navLink' to='/contact'>Contact</Link> */}
        </footer>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
