
import React from 'react';
import PasswordTextField from './Components/passworld_field';
import MyImage from './Image/logo123.png';
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Components/form.css';
import { Link } from 'react-router-dom';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CopyRightTag from './Components/Copyright';
import HomePage from './HomePage/HomeLayout';
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const myStyle = {
    color: '#0A83F0',
   
    width: '320px',
   height: '40px',
  };
  const myError = {
    color: '#DF2020',
    
  };

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // setIsSubmitted(true);
        navigate('/homela', { state: { inputValue: inputValue } });
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  
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
  // JSX code for login form
  const renderForm = (
    <div className='container-login'>
    <div className="form">
      <img src={MyImage} alt='Wave Billing System Logo'  className='forgetLogo' />
      <h4 className='fontfamily'>LOGIN TO CONTINUE</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
         
          <input type="text" name="uname" required  placeholder='Username' className='login-field'/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          
          <input type="password" name="pass" required  placeholder='Password' className='login-field'/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      
      <Link to='/nextpage'><p style={myStyle}>Forgot Password?</p></Link>
      <CopyRightTag />
    </div></div>
  );

  return (
    <div className='container-login'>
      
      {/* <form>
        <input type="text" name= "uname"id="inputField" placeholder='Username' value={inputValue} onChange={handleInputChange} className='login-field'/>
        {renderErrorMessage("uname")}

        <input type="password" name="pass"placeholder='password'  value={passwordValue} onChange={handlePasswordChange} className='login-field' /><br />
        {renderErrorMessage("pass")}
        <button className='btn btn-primary' onClick={handleButtonClick}>Login</button>
      </form> */}
       <div className="login-form">
        
        {isSubmitted ? <div><HomePage/></div>: renderForm}
      </div>
      <br></br>

    </div>

    // <div>
    //   {showError && <p className='error-message' style={myError}
   // {showPasswordError && <p className='error-message' style={myError}>Please enter a password.</p>}
    //   <br></br>
    //   <button className='btn btn-primary' onClick={handleButtonClick}>Login</button>
    // </div>
  );
}

export default Login;