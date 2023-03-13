import React from 'react'
import FriendList from './components/FriendList'
import data from './data'
import Friend from './components/Friend'
import Pet from './components/Pet'
import Navbar from './components/Navbar'

function App() {

  const friends = data.map(friend => {
    return (
      <Friend
        key = {friend.id}
        friend = {friend}
      />
    )
  })

  // const pets = data.map(pet => {
  //   return(
  //     <Pet
  //       key = {pet.id}
  //       pet = {pet}
  //     />
  //   )
  // })

return(
    <div className='list'>
      <Navbar/>
       {friends}
       
    </div>
)

}

export default App
