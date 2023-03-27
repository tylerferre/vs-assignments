import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

const [color, setColor] = useState('')
const [randomNum, setRandomNum] = useState(0)

  const randomize = () =>{
  setRandomNum(Math.floor(Math.random() * 7) + 1)
}

useEffect(() =>{
  axios.get('https://www.colr.org/json/schemes/random/7?scheme_size_limit=>5')
  .then(res => {
    setColor(res.data.matching_schemes[randomNum])
    //console.log(res.data)
  })
  .catch(err => console.log(err))
}, [randomNum])


  return (
    <div className="App">
      <div className='color' style={{backgroundColor: `#${color}`}}></div>
      <button onClick={randomize} style={{borderColor: `#${color}`}}>Click</button>
    </div>
  )
}

export default App
