import {useState} from "react"
import Logo from "../assets/logo.svg"

const Header = ({children, theme, setTheme}) => {
    return (
        <header>
            <span className="logo">
                <img src={Logo} alt="" />
                <span>{children}</span>
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
