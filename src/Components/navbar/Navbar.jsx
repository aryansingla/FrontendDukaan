import React from 'react'
import "./Navbar.css";
import dukaanLogo from "../../assets/images/dukaanLogo.jpg"
const Navbar = () => {
  return (
    
   <div className="navbar">
      <div className="navBarLogo">
        <img src={dukaanLogo} className="dukaanLogo" />
      </div>
      <div className="navBarButtons">
      <a href="/">Sign In</a>
      <button>Dukaan for PC</button>
      </div>
    </div>
    
  )
}

export default Navbar