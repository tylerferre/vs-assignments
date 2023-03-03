import React from 'react'
import Friend from './Friend'
import Pet from './Pet'
import data from '../data'

const FriendList = () =>{

    const friends = data.map(friend => {
        return (
          <Friend
            key = {friend.id}
            friend = {friend}
          />
        )
      })

      const pets = data.map(pet => {
        return(
          <Pet
            key = {pet.id}
            pet = {pet}
          />
        )
      })

    return(
        <div className='list'>
           {friends}
           {pets}
        </div>
    )
}

export default FriendList
