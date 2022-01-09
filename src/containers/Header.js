import React from "react";
import logo from "../logo.png";

const Header = () => {
  return (
    <div className="Header">
      <header className="App-header">
        <img src={logo} alt="logo" className="logo" />
        <div className="Menu">
            <h2>Home</h2>
            <h2>About Us</h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
