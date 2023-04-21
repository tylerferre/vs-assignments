import { useState } from 'react'

function App() {

  const [colors, setColors] = useState({color1: '#ffffff', color2: '#000000', angle: '90'})

  const handleChange = (e) =>{
    const {name, value} = e.target
    setColors(prevState => (
      {
        ...prevState, 
        [name]: value
      }
    ))
  }

  return (
    <div className="App">
      <h1 className='title'>CSS Gradient Code Generator</h1>
      <div className='mainBox'>

        <div className='colorBox'>
          <div className='color' style={{background: `linear-gradient(${colors.angle}deg, ${colors.color1}, ${colors.color2})`}}></div>
          <div className='colorCode'>
            <p>background: linear-gradient({colors.angle}deg, {colors.color1}, {colors.color2});</p>
            <p>-moz-background: linear-gradient({colors.angle}deg, {colors.color1} , {colors.color2});</p>
            <p>-webkit: linear-gradient({colors.angle}deg, {colors.color1} , {colors.color2});</p>
          </div>
        </div>

        <form className='optionBox'>
          <h2>Options</h2>
          
          <div className='options'><span>Color 1:</span><span className='hex'>{colors.color1}</span><input className='colorInput' onChange={handleChange} value={colors.color1} name='color1' type='color'/></div>
          <br />
          <div className='options'><span>Color 2:</span><span className='hex'>{colors.color2}</span><input className='colorInput' onChange={handleChange} value={colors.color2} name='color2' type='color'/></div>
          <br />
          <span>Angle:</span><input style={{width: '40px'}} max={99} min={0} onChange={handleChange} value={colors.angle} name="angle" type='number'/>
        </form>
      </div>
    </div>
  )
}

export default App
