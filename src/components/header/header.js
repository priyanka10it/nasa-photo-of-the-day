import "./header.css"
import React from "react"

const Header = () => {
    return (
        <header className="header-section">
            <h1>Nasa Photo of The Day</h1>
            <nav id="nav">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT US</a>
                <a href="#">SIGN-UP</a>
            </nav>
        </header>
    )
}


export default Header;