import React from "react";

const Contact = () =>{
    return(
        <div className="contact">
            <li>Roto-Router@email.com</li>
            <li>445-226-1175</li>
            <li>roto@hotmail.com</li>
            <form className="contactForm">
                <h3>Send us an Email!</h3>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact