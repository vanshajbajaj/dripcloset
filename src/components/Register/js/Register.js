import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./../css/Register.css";
import logo4 from "./../assets/logo3.jpg";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
    const regex = /^[a-zA-Z ]+$/;
    if (!regex.test(event.target.value)) {
      setNameError('Name must contain only alphabets');
    } else if (event.target.value.length < 3) {
      setNameError('Name must be at least 3 characters long');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(event.target.value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    const regex = /^[0-9]{10}$/;
    if (!regex.test(event.target.value)) {
      setPhoneError('Phone number must be a 10 digit number');
    } else {
      setPhoneError('');
    }
  };

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
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      window.alert('perfect values!');
      navigate('/');
    }
  };

  return (
    <>

      <div id="registermain">

        <div className='registerdivs'>

          <img src={logo4} id="registerleftlogo"></img>

        </div>

        <div className='registerdivs' id="registerdivmid">

        </div>

        <div className='registerdivs' id="registerdivright">
          <div id="rdrtext">

            <span id="rdrhead">Welcome to <span id="rdrheadlogo">DRIPCLOSET</span></span>
            <span id="rdrinfo">PLEASE ENTER YOUR DETAILS TO REGISTER.</span>

          </div>
          <div id="rdrform">

            <form id="rdrform" method='POST' onSubmit={handleSubmit}>

              <section className='rdrforminpgroup'>
                <label htmlFor='name'>
                  <i className="rdrformicon zmdi zmdi-account material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="text" name='name' id='name' value={name} onChange={handleNameChange} onBlur={handleNameChange} placeholder='Your Name' required></input>
              </section>
              {nameError && <span className='errdiv'>{nameError}</span>}

              <section className='rdrforminpgroup'>
                <label htmlFor='email'>
                  <i className="rdrformicon zmdi zmdi-email material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="email" name='email' id='email' value={email} onChange={handleEmailChange} onBlur={handleEmailChange} placeholder='Your Email' required></input>
              </section>
              {emailError && <span className='errdiv'>{emailError}</span>}

              <section className='rdrforminpgroup'>
                <label htmlFor='phone'>
                  <i className="rdrformicon zmdi zmdi-phone-in-talk material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="tel" name='phone' id='phone' value={phone} onChange={handlePhoneChange} onBlur={handlePhoneChange} placeholder='Your Phone' required></input>
              </section>
              {phoneError && <span className='errdiv'>{phoneError}</span>}

              <section className='rdrforminpgroup'>
                <label htmlFor='password'>
                  <i className="rdrformicon zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="password" name='password' id='password' value={password} onChange={handlePasswordChange} onBlur={handlePasswordChange} placeholder='Your Password' required></input>
              </section>
              {passwordError && <span className='errdiv'>{passwordError}</span>}

              <section className='rdrforminpgroup'>
                <label htmlFor='cpassword'>
                  <i className="rdrformicon zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input className="rdrforminp" type="password" name='cpassword' id='cpassword' value={confirmPassword} onChange={handleConfirmPasswordChange} onBlur={handleConfirmPasswordChange} placeholder='Confirm Your Password' required></input>
              </section>
              {confirmPasswordError && <span className='errdiv'>{confirmPasswordError}</span>}

              <input type="submit" name='signup' id='signup' className="rdrformbt" value="Register"></input>

              <Link id="rdrlink" to='/login'>Already a member?</Link>

            </form>

          </div>
        </div>

      </div>

    </>
  )
}

export default Register