import React from 'react'

const CardList = (props) =>{

    let priceTag
    if(props.item.price < 500){
        priceTag = '$'
    }else if(props.item.price < 1000){
        priceTag ='$$'
    }else if(props.item.price > 1000){
        priceTag = '$$$'
    }

    let season
    if( props.item.timeToGo === "Spring"){
        season = <span style={{color:'limegreen'}}>{props.item.timeToGo}</span>
    }else if(props.item.timeToGo === "Fall"){
        season = <span style={{color:'orange'}}>{props.item.timeToGo}</span>
    }else if(props.item.timeToGo === "Winter"){
        season = <span style={{color:'skyblue'}}>{props.item.timeToGo}</span>
    }else if(props.item.timeToGo === "Summer"){
        season = <span style={{color:'yellow'}}>{props.item.timeToGo}</span>
    }

    return(
        <div className='cl'>
            <div className='imgDiv'>
                <p>{priceTag}</p>
                <img src={props.item.img}/>
            </div>
            <div className='infoDiv'>
                <h1>{props.item.place}</h1>
                <h3>${props.item.price}</h3>
                <h5> time to go: {season}</h5>
            </div>
        </div>
    )
}

export default CardList