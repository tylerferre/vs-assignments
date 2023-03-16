import React, {useState} from 'react'
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
    setColors(prevState => prevState[0] === "purple" ? ["white", "white", prevState[2], prevState[3]] : ["purple", "purple", prevState[2], prevState[3]])
  }

  const leftBlue = () =>{
    setColors(prevState => prevState[2] === "blue" ? [prevState[0], prevState[1], "white", prevState[3]] : [prevState[0], prevState[1], "blue", prevState[3]])
  }

  const rightBlue = () =>{
    setColors(prevState => prevState[3] === "blue" ? [prevState[0], prevState[1], prevState[2], "white"] : [prevState[0], prevState[1], prevState[2], "blue"])

  }

  const leftYellow = () =>{
    setColors(prevState => prevState[0] === "yellow" ? ["white", prevState[1], prevState[2], prevState[3]] : ["yellow", prevState[1], prevState[2], prevState[3]])
  }

  const rightOrange = () =>{
    setColors(prevState => prevState[1] === "orange" ? [prevState[0], "white", prevState[2], prevState[3]] : [prevState[0], "orange", prevState[2], prevState[3]])

  }

  const leftPink = () =>{
    setColors(prevState => prevState[2] === "pink" ? [prevState[0], prevState[1], "white", prevState[3]] : [prevState[0], prevState[1], "pink", prevState[3]])
  }

  const rightGreen = () =>{
    setColors(prevState => prevState[3] === "green" ? [prevState[0], prevState[1], prevState[2], "white"] : [prevState[0], prevState[1], prevState[2], "green"])
  }

  return (
    <div className="App">
      {boxElements}
      <button className='smallDj' onClick={smallDj}>Small DJ</button>
      <button className='partyDj' onClick={partyDj}>Party DJ</button>
      <button className='leftBlue' onClick={leftBlue}>Left Blue</button>
      <button className='rightBlue' onClick={rightBlue}>Right Blue</button>
      <button className='leftYellow' onClick={leftYellow}>Left Yellow</button>
      <button className="rightOrange" onClick={rightOrange}>Right Orange</button>
      <button className='leftPink' onClick={leftPink}>Left Pink</button>
      <button className='rightGreen' onClick={rightGreen}>Right Green</button>
    </div>
  )
}

export default App
