import React from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav id="nav">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
        <a href="#">SIGN-UP</a>
      </nav>
      <div className="logo_container">
        <img className="logo" src={logo} alt="NASA official logo" />
      <h1>
      Astronomy Picture of the Day
      </h1>
      
    </div>
    </div>
  );
}

export default App;


