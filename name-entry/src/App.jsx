import { useState } from 'react'

function App() {

const [formData, setFormData] = useState({name: "_ _ _ _"})
const [list, setList] = useState([])
const listMap = list.map(item => <li>{item}</li>)


const handleChange = (event) =>{

  const {name, value} = event.target
  setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
  }))
}

const handleSubmit = (event) =>{
  event.preventDefault()

  setList(prevState => (
    [
      ...prevState,
      formData.name
    ]
  ))
  console.log(formData)
  console.log(list)

}

  return (
    <div className="App">
      <h1>{formData.name}</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
        className='inputBox' 
        type="text" 
        name="name"
        placeholder='Name'
        onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <ol className='ol'>
        {listMap}
      </ol>
    </div>
  )
}

export default App
