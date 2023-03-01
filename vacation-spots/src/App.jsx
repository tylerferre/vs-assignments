import React from 'react'
import Navbar from './components/Navbar'
import CardList from './components/CardList'
import data from './data'

function App() {

  const cards = data.map(item => {
    return(
      <CardList
      key = {item.id}
      item = {item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <section className='list'/>
        {cards}
    </div>
  )
}

export default App
