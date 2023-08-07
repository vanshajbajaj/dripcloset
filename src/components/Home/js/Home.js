import React, { useState } from 'react'
import "./../css/Home.css"
import { useEffect } from 'react';
import topimg from "./../assets/topimg.jpg";
import topimg2 from "./../assets/topimg2.jpg";
import { NavLink } from 'react-router-dom';

const Home = () => {

  return (
    <>

      <div id="homemain">

        <div id="homehead">

          <div id="hhl" className='hhd'>
            <img src={topimg} id="hhlimg"></img>
          </div>

          <div id="hhr" className='hhd'>

            <p id="hhr1">WELCOME TO</p>
            <p id="hhr2">DRIP CLOSET</p>
            <p id="hhr3">DRIP CLOSET is an online shopping website where you can buy different clothing products.</p>
            <div id="hhr4"><NavLink id="hhr5" to='/register'>REGISTER</NavLink></div>


          </div>

        </div>

        <div id="homemid">

          <div className="homesubdiv">

            <div className="subdivcontent">
              <i class=" subdivlogo zmdi zmdi-hospital"></i>
              <p className='subdivp1'>10K+ USERS</p>
              <p className='subdivp2'> WE HAVE RECIEVED 10K+ USER REGISTERATIONS</p>
            </div>

          </div>
          <div className="homesubdiv" id="homesubdiv2">

            <div className="subdivcontent">
              <i class=" subdivlogo2 zmdi zmdi-hospital"></i>
              <p className='subdivp1'>150K+ PRODUCTS</p>
              <p id='subdivp2'>150K+ PRODUCTS HAVE BEEN UPLOADED ON OUR SITE</p>
            </div>

          </div>
          <div className="homesubdiv">

            <div className="subdivcontent">
              <i class=" subdivlogo zmdi zmdi-hospital"></i>
              <p className='subdivp1'>7K+ DEALERS</p>
              <p className='subdivp2'>WE HAVE PROVIDED PLATFORM TO 7K+ DEALERS</p>
            </div>

          </div>

        </div>

        <div id="noticediv">

          <div id="ndl" className='nsd'>
            <div id="ndlp">
              <p>NOTICES</p>
            </div>
            <div id="ndlcontent">
              <div className='noticeli' >Big Billion Days Sale coming soon</div>
              <div className='noticeli' >New collection by NIKE</div>
              <div className='noticeli' >ZARA Tshirts 50% OFF</div>
            </div>

          </div>
          <div id="ndr" className='nsd'>
            <img src={topimg2} id="ndrimg"></img>
          </div>

        </div>

      </div>

    </>
  )
}

export default Home;