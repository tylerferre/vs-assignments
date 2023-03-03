import React from 'react'

const Pet = (props) =>{
    const name = props.pet.pets.map(p => <h3>{p.name}: <span className='petbreed'>{p.breed}</span></h3>)
    
    return(
        <div className='pet'>
            <div className='pe'>
                <h4>{name}</h4>
                <h4></h4>
            </div>
        </div>
    )
}

export default Pet