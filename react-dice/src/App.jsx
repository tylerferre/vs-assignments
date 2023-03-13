import React, {useState} from 'react'
import Die from './Die'

const App = () =>{
  const [number, setNumber] = useState(["-", "-", "-", "-", "-"])
  
  const randNum = () =>{
  setNumber([Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1])
}

const reset = () =>{
  setNumber(["-", "-", "-", "-", "-"])
}

  return (
    <div className="App">
      <button onClick={randNum}>Roll Dice</button>
      <Die roll={number}/>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
