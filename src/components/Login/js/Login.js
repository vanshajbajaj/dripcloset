import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./../css/Login.css";
import logo3 from "./../assets/logo3.jpg";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (event) => {

    setEmail(event.target.value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(event.target.value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }

  }

  const handlePasswordChange = (event) => {

    const { value } = event.target;
    setPassword(value);

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!value) {
      setPasswordError("Password is required");
    } else if (!regex.test(value)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character, and be at least 8 characters long"
      );
    } else {
      setPasswordError("");
    }

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    if (e.target.checkValidity()) {
      window.alert("Logged in Successfully");

      navigate('/');
    }

  }

  return (
    <>

      <div id="loginmain">

        <div className='logindivs'>
          <img src={logo3} id="leftlogologin"></img>
        </div>

        <div className='logindivs' id="logindivmid">

        </div>

        <div className='logindivs' id="logindivright">
          <div id="ldrtext">

            <span id="ldrhead">Welcome to <span id="ldrheadlogo">DRIPCLOSET</span></span>
            <span id="ldrinfo">PLEASE ENTER YOUR CREDENTIALS TO LOGIN.</span>

          </div>
          <div id="ldrform">

            <form id="ldrform" method="POST" onSubmit={handleSubmit}>

              <section className='ldrforminpgroup'>
                <label htmlFor='email'>
                  <i className="ldrformicon zmdi zmdi-email material-icons-name"></i>
                </label>
                <input className="ldrforminp" type="email" name='email' id='email'
                  value={email} onChange={handleEmailChange} onBlur={handleEmailChange} placeholder='Your Email' required></input>
              </section>
              {emailError && <span className='errdiv'>{emailError}</span>}

              <section className='ldrforminpgroup'>
                <label htmlFor='password'>
                  <i className="ldrformicon zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input className="ldrforminp" type="password" name='password' id='password'
                  value={password} onChange={handlePasswordChange} onBlur={handlePasswordChange} placeholder='Your Password' required></input>
              </section>
              {passwordError && <span className='errdiv'>{passwordError}</span>}

              <input type="submit" name='signin' id='signin' className="ldrformbt" value="Login"></input>

            </form>

          </div>
        </div>

      </div>

    </>
  )
}

export default Login