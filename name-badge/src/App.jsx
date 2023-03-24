import { useState } from 'react'


function App() {
const [formData, setFormData] = useState(
  {
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    aboutSelf: ""
  }
)
const [infoArray, setInfoArray] = useState([])
const map = infoArray.map(item => <span>{item}</span>) 

const handleChange = (event) =>{
  const {name, value} = event.target
  setFormData(prevState => (
    {
      ...prevState,
      [name]: value
    }
  ))
}
console.log(formData)

const handleSubmit = (event) =>{
  event.preventDefault()

  setInfoArray((
    [
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.placeOfBirth,
      formData.phone,
      formData.favoriteFood,
      formData.aboutSelf
  ]
  ))

  setFormData((
    {
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      aboutSelf: ""
    }
  ))
}

  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='First Name' 
          name='firstName'
          value={formData.firstName}
          className="firstName"
          onChange={handleChange}
          minLength={3}
          required
        />
        <input 
          type="text" 
          placeholder='Last Name' 
          name='lastName'
          value={formData.lastName}
          className="lastName"
          onChange={handleChange}
          minLength={3}
          required
        />
        <input 
          type="email" 
          placeholder='Email' 
          name='email'
          value={formData.email}
          className="email"
          onChange={handleChange}
          minLength={3}
          required
        />
        <input 
          type="text" 
          placeholder='Place of birth' 
          name='placeOfBirth'
          value={formData.placeOfBirth}
          className="placeOfBirth"
          onChange={handleChange}
          minLength={3}
          required
        />
        <input 
          type="number" 
          placeholder='Phone' 
          name='phone'
          value={formData.phone}
          className="phone"
          onChange={handleChange}
          minLength={3}
          
          required
        />
        <input 
          type="text" 
          placeholder='Favorite food' 
          name='favoriteFood'
          value={formData.favoriteFood}
          className="favoriteFood"
          onChange={handleChange}
          minLength={3}
          required
        />
        <textarea  
          placeholder='Tell us about yourself' 
          name='aboutSelf'
          value={formData.aboutSelf}
          className="aboutSelf"
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
      {infoArray.length > 1 && <div className='badge'>
        <h1 className='title'>Badge:</h1>
        <div className='info'>
          <h2 className="bName">Name: {map[0]} {map[1]}</h2>
          <h2 className="bPhone">Phone: {map[4]}</h2>
          <h2 className="bBirth">Place of birth: {map[3]}</h2>
          <h2 className="bFood">Favorite food: {map[5]}</h2>
          <h2 className="bEmail">Email: {map[2]}</h2>
          <p className="bAbout">{map[6]}</p>
        </div>
      </div>}
    </div>
  )
}

export default App
