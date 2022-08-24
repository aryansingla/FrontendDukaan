import React from 'react'
import "./footer.css"
import footerLogo from "../../assets/images/footerLogo.png"
import "/node_modules/flag-icons/css/flag-icons.min.css";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerWrapper">
      <div className="footerList">
        <div className="footerLogo">
        <img src={footerLogo} className="footerLogoImg" alt="" />
        </div>
        <div className="footerOptionsList">
          <a href="" className="footerListOption">Contact</a>
          <a href="" className="footerListOption">FAQ</a>
        </div>
        <div className="footerOptionsList">
          <a href="" className="footerListOption">Tutorials</a>
          <a href="" className="footerListOption">Blog</a>
        </div>
        <div className="footerOptionsList">
          <a href="" className="footerListOption">Privacy</a>
          <a href="" className="footerListOption">Banned Items</a>
        </div>
        <div className="footerOptionsList">
          <a href="" className="footerListOption">About</a>
          <a href="" className="footerListOption">Jobs <span className="footerJobsNumber">3</span></a>
        </div>
        <div className="footerOptionsList">
          <a href="" className="footerListOption">Facebook</a>
          <a href="" className="footerListOption">Twitter</a>
          <a href="" className="footerListOption">Linkedin</a>
        </div>  
      </div>
      <hr></hr>
      <div className="footerOtherContent">
        <div className="footerCopyrighText">
          <p>Dukaan 2020, All rights reserved.</p>
        </div>
        <div className="footerMadeInText">
          <p>Made in <span className="fi fi-in fis"></span></p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer

