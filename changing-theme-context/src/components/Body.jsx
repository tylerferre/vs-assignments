import React, { useContext } from "react";
import { ThemeProvider } from "../ThemeProvider";

const Body = () =>{

    const {theme, toggle} = useContext(ThemeProvider)

    return(

        <div className={`body-${theme}`}>
            <h1>Click to Change the Theme!</h1>
            {/* <select
                onChange={handleChange}
                value={theme}
                name="theme"
                id="theme"
            >
                <option value="code">code</option>
                <option value="fire">fire</option>
                <option value="other">other</option>
            </select> */}
            <button onClick={toggle} className={`button-${theme}`}>CLICK HERE</button>
        </div>
    )
}

export default Body