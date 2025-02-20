import {useState} from "react"
import {useEffect} from "react"
import Logo from "../assets/logo.svg"

export const Header = () => {
    const [theme, setTheme] = useState("light");
    useEffect (() => {
        document.documentElement.classList.add(theme);
    }, [theme]);
    
    return (
        <header>
            <span className="Logo">
                <img src={Logo} alt="Taskapp Logo" />
                <span>{Taskapp}</span>
            </span>
            <span className="themeSelector">
                <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("blue")} className={ theme === "blue" ? "blue activeTheme" : "blue"}></span>
            </span>
        </header>
    )
}

export default Header;
