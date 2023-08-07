import React from 'react';
import "./../css/Footer.css";
import { Link } from 'react-router-dom';
import logo from "./../assets/logo-no-background.png";

const Footer = () => {
  return (
    <>
      <div id="footermain">
        <div id="footerlogo">
          <img src={logo} id="footerlogoimg"></img>
        </div>
        <div id="footerlinks">
          <Link className='ftlink' to="/fb"><i class="flinks zmdi zmdi-facebook-box"></i></Link>
          <Link className='ftlink' to="/tw"><i class="flinks zmdi zmdi-twitter"></i></Link>
          <Link className='ftlink' to='/ld'><i class="flinks zmdi zmdi-linkedin-box"></i></Link>
        </div>
        <div id="footerauth">
         <i class=" flinks zmdi zmdi-mood"></i> Made By Vanshaj Bajaj
        </div>
      </div>
    </>
  )
}

export default Footer;