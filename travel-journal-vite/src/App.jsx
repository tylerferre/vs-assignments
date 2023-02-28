import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Data from './data'

const App = () =>{
  const cards = Data.map(item => {
      return (
          <Body
              key={item.id}
              item={item}
          />
      )
  })
  
  return (
      <div>
          <Navbar/>
          <section className="cardList"/>
              {cards}
      </div>
  )
}

export default App
