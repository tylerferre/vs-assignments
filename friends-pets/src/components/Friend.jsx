import React from 'react'
import Pet from "./Pet"
import data from '../data'

const Friend = (props) =>{

    const name = props.friend.pets.map(p => <h3 className='petName'>{p.name}: <span className='petBreed'>{p.breed}</span></h3>)


    return(
        <div className='friend'>
            <h1 className='name'>{props.friend.name}</h1>
            <h3 className='age'>Age: {props.friend.age}</h3>
            <h3 className='pn'><span className='pets'>Pets</span> {name}</h3>

        </div>
    )
}

export default Friend