import React from 'react'

const Die = (props) =>{
    
    return (
        <div className='die'>
            <h1>{props.roll[0]}</h1>
            <h1>{props.roll[1]}</h1>
            <h1>{props.roll[2]}</h1>
            <h1>{props.roll[3]}</h1>
            <h1>{props.roll[4]}</h1>
        </div>
    )
}
export default Die