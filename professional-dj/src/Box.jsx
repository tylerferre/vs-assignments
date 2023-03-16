import React from 'react'

const Box = (props) =>{

    const styles = {
        backgroundColor: props.color
    }
    return (
        <div className='boxes' style={styles}></div>
    )
}

export default Box