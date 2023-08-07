import React, { useState } from 'react';
import "./../css/Navbar.css";
import { Link } from 'react-router-dom';
import logo from "./../assets/png/logo-no-background.png";

const Navbar = () => {

    const [popup,setPopup]=useState(false);

    const togglePopup=()=>{

        if(popup){
            setPopup(false);
        }
        else{
            setPopup(true);
        }

    }

    return (
        <>

            <div id="nbdiv">

                <div id="nbimgdiv">
                    <img src={logo}></img>
                </div>
                <div id="nblinksdiv">
                    <div className="nblink">
                        <Link to="/">HOME</Link>
                    </div>
                    <div className="nblink">
                        <Link to="/err">MY PROFILE</Link>
                    </div>
                    {/* <div className="nblink">
                        <Link to="/login">LOGIN</Link>
                    </div>
                    <div className="nblink">
                        <Link to="/register">REGISTER</Link>
                    </div> */}
                    <div className='nblink'>
                        <div id='togglepopup' onClick={togglePopup}>ACCOUNT</div>
                    </div>
                </div>
                {popup && <div id='nbpopupdiv'>
                    <div className='nbpopuplink'>
                        <Link className='nbltxt' to="/register">Register</Link>
                    </div>
                    <div className='nbpopuplink'>
                        <Link className='nbltxt' to="/login">Login</Link>
                    </div>
                </div>}
                

            </div>

        </>
    )
}

export default Navbar