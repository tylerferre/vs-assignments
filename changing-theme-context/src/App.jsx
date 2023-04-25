import { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import {ThemeProvider} from './ThemeProvider'

function App() {

  const {theme} = useContext(ThemeProvider)

  return (
    <div className={`App-${theme}`}>
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default App
