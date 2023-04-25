import React, {useState, createContext} from "react";

const ThemeProvider = createContext()

const ThemeContextProvider = (props) =>{
    const [theme, setTheme] = useState('code')

    // const handleChange = (e) =>{
    //     const {name, value} = e.target
    //     setTheme(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }

    const toggle = () => {
        setTheme(prevState => prevState === 'code' ? "fire" : "code")
    }

    return(
        <ThemeProvider.Provider value={{
            theme: theme,
            toggle: toggle
        }}>
            {props.children}
        </ThemeProvider.Provider>
    )

}



export {ThemeContextProvider, ThemeProvider}