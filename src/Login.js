
import React from 'react';
import PasswordTextField from './Components/passworld_field';
import MyImage from './Image/logo123.png';
import './App.css';
import './Components/form.css';
import { Link } from 'react-router-dom';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CopyRightTag from './Components/Copyright';
function Login() {
  const myStyle = {
    color: '#0A83F0',
   
    width: '320px',
   height: '40px',
  };
  const myError = {
    color: '#DF2020',
    
  };

  
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  }

  const handleButtonClick = () => {
    if (inputValue === '' && passwordValue !== '' ) {
      setShowError(true);
      setShowPasswordError(false);
      return;
    }
    if (passwordValue === '' && inputValue !== '') {
      setShowPasswordError(true);
      setShowError(false);
      return;
    }
    if (passwordValue === '' && inputValue === '') {
      setShowError(true);
      return;
    }
    
    setShowPasswordError(false);
    setShowError(false);
  
    navigate('/homela', { state: { inputValue: inputValue } });
  }

  return (
    <div className='container-login'>
      <img src={MyImage} alt='Wave Billing System Logo'  className='forgetLogo' />
      <h4 className='fontfamily'>LOGIN TO CONTINUE</h4>
      <input type="text" id="inputField" placeholder='Username' value={inputValue} onChange={handleInputChange} className='login-field'/>
      {showError && <p className='error-message' style={myError}>Please enter a username.</p>}

      <input type="password" placeholder='password'  value={passwordValue} onChange={handlePasswordChange} className='login-field' /><br />
      {showPasswordError && <p className='error-message' style={myError}>Please enter a password.</p>}
      <button className='btn btn-primary' onClick={handleButtonClick}>Login</button>
      <br></br>

      <Link to='/nextpage'><p style={myStyle}>Forgot Password?</p></Link>
      <CopyRightTag />
    </div>

    // <div>
    //   
    //   <br></br>
    //   <button className='btn btn-primary' onClick={handleButtonClick}>Login</button>
    // </div>
  );
}

export default Login;