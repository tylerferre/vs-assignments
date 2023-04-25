import React, { useContext } from "react";
import { ThemeProvider } from "../ThemeProvider";

const Navbar = () =>{

    const {theme} = useContext(ThemeProvider)

    return(
        <div className={`navbar-${theme}`}>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
    )
}

export default Navbar