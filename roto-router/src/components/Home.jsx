import React from "react";

const Home = () =>{
    return(
        <div className="home">
            <div className="homeImg"></div>
            <h3>We handle it all!</h3>

            <div className="grid">
                <div className="grid1">
                    <li>Commercial Plumbing</li>
                    <li>Residential Plumbing</li>
                    <li>Service and Repare</li>
                </div>
                <div className="grid2">
                    <li>Water supply</li>
                    <li>Sanitary Plumbing</li>
                </div>
            </div>
        </div>
    )
}

export default Home