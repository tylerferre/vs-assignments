import React, {useContext} from "react";
import { ThemeProvider } from "../ThemeProvider";

const Footer = () =>{

    const {theme} = useContext(ThemeProvider)

    return(
        <div className={`footer-${theme}`}>
            <p>Created by Tyler Ferre</p>
        </div>
    )
}

export default Footer