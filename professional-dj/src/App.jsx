import React, { PureComponent, useState } from 'react'
import Box from './Box'


function App() {

  const [colors, setColors] = useState(["white", "white", "white", "white"])
  const boxElements = colors.map(box => (
    //<Box key={box} color={box} />
    <div className='boxes' style={{backgroundColor: box}}></div>
  ))

  const smallDj = () =>{
    setColors(prevState => prevState[0] === "white" ? ["black", "black", "black", "black"] : ["white", "white", 'white', 'white'])
  }

  const partyDj = () =>{
    setColors(prevState => prevState[0] === "purple" ? [...prevState] : ["purple", "purple", prevState[2], prevState[3]])
  }



  return (
    <div className="App">
      {boxElements}
      <button className='smallDj' onClick={smallDj}>Small DJ</button>
      <button className='partyDj' onClick={partyDj}>Party DJ</button>
    </div>
  )
}

export default App
