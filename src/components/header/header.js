/*import "./header.css"*/
import React from "react"
import styled from "styled-components";
import { Nav,NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
    return (
        <header className="header-section">
          <div>
            <Nav id="nav">
             <NavLink href="#">HOME</NavLink> <NavLink href="#">ABOUT</NavLink> <NavLink href="#">CONTACT US</NavLink> <NavLink disabled href="#">SIGN-UP</NavLink>
            </Nav>
            </div>
      
            <h1>Nasa Photo of The Day</h1>
      </header>      
       
    )
}


export default Header;