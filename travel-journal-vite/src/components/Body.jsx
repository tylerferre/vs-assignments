import React from 'react'

const Body = (props) =>{
    return (
        <div className="main">
            <div className="imgDiv">
                <img className="img" src={props.item.imageUrl}/>
            </div>
            <div className="infoDiv">
                <div className="info1">
                    <span id="pin" className="material-symbols-outlined">location_on</span>
                    <p className="country">{props.item.location}</p>
                    <a className="link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="location">{props.item.title}</h1>
                <div className="info2">
                    <h4 className="date">{props.item.startDate + " - " + props.item.endDate}</h4>
                    <p className="desc">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Body