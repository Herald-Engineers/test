import React from 'react';
import MyImage from './Image/logo123.png';
import './App.css';
import 'reactjs-popup/dist/index.css';
import './Components/form.css';
import { Link } from 'react-router-dom';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CopyRightTag from './Components/Copyright';
import HomePage from './HomePage/HomeLayout';
import LoginSec from './Image/LoginSec.png';
import axios from 'axios';
import LoadingSpinner from './Components/LoadingSpinner';


// const url = 'https://wavebilling-backend-sabinlohani.onrender.com/login ';
function getNotificationMessage(username, password) {
  if (username === "" || password === "") {
    return "Please enter both username and password.";
  } else if (username !== "example" || password !== "password") {
    return "Invalid username or password.";
  } else {
    return "Login successful.";
  }
}
 function Login() {
  
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhbWVzaCIsImlkIjoiNjQxYWZkNTgyYjM2MWQyNzg2Njc0ZjYxIiwiaWF0IjoxNjc5ODM5MDAzfQ.N61yNl2GfLEGT49Pia9Kg-xW1cO9MqwZ0pQE2xfU3HM';
  const navigate = useNavigate();

  // Set up state variables for handling server response, loading state, username, password, and error message
  const [serverResponseReceived, setServerResponseReceived] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Define an event handler for submitting the form data to the server
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("hello");

     // Send a POST request to the server with the entered username and password
    axios.post("https://wavebilling-backend-sabinlohani.onrender.com/login", {
      username: username,
      password: password
    })
    .then(res => {
      const token = res.data.token;
      const role = res.data.role;
      setServerResponseReceived(true);
      setLoading(false);
       // Depending on the user role, navigate to a different page
      if (role === 'individualConsumer') {
          // Navigate to another page
          const notificationMessage = getNotificationMessage(username, password);
          navigate("/homela", { state: { username, password } });
      } 
      else if(role === 'admin'){
        navigate("/meterReader");
      }
      else if(role === 'companyConsumer'){
        navigate("/");
      }
      else {
          navigate("/meterReaderDash");
      }
      
      console.log(res.data);
      
    })
    .catch(error => {
      console.log(error);
      setErrorMessage("Invalid username or password");
    });
  };

  return (
    
  <div className='Container'>
    <div className='MyLogoImageSection'> 
        <img src={LoginSec} alt='Protect Water'  className='MyLogoImage' />
    </div>
   
    <div className="form" >
      <div className=''>  
        <center> <img src={MyImage} alt='Wave Billing System Logo'  className='myLogo text-center' /></center>
       <center> <h4 style={{paddingBottom:'40px'}}>LOGIN TO CONTINUE</h4></center>
       <div className='myItems'>
        <form onSubmit={handleSubmit}>
          {/* {error && <p>{error}</p>} */}
          <div className="input-container">
            <label className='ridhtalignlabel'>Username</label><br/>
            <input type="text" required value={username} placeholder='Username' className='login-field'  onChange={handleUsernameChange}/>
          
          </div>
          <div className="input-container">
          <label>Password</label><br/>
            <input type="password"  required  value={password} placeholder='Password' className='login-field'  onChange={handlePasswordChange}/>
          
          </div>
          {errorMessage && <div style={{color:'red'}}>{errorMessage}</div>}

          <div className="button-container">
          <input type="checkbox"  name="lsRememberMe"/>
                <label style={{color:'#B1ABAB',fontSize:'14px'}}>Remember me</label>
          <Link to='/nextpage'><span style={{ fontSize: '13px'}}className='myforgot' >Forgot Password?</span></Link>
           
          </div>
          <button type="submit" className='btn btn-primary' >Login</button>
          <p style={{color: '#B1ABAB',fontSize:'12px',paddingLeft:'42px',paddingTop:'10px'}}>Don't have an account?<Link to='/signinas'>{'\n'}Gets yours now</Link></p>
        </form>
        {loading && !serverResponseReceived && <LoadingSpinner />}
        </div>
        
        <CopyRightTag className='copyright-css' />
      </div>
    </div>
  </div>
      
  );
}

export default Login;


// <div className='container-login'>
//     <div className="form">
//       <img src={MyImage} alt='Wave Billing System Logo'  className='forgetLogo' />
//       <h4 className='fontfamily'>LOGIN TO CONTINUE</h4>
//       <form onSubmit={handleSubmit}>
//       {error && <p>{error}</p>}
//         <div className="input-container">
         
//           <input type="text" required value={username} placeholder='Username' className='login-field'  onChange={(e) => setUsername(e.target.value)}/>
         
//         </div>
//         <div className="input-container">
          
//           <input type="password"  required   value={password} placeholder='Password' className='login-field'  onChange={(e) => setPassword(e.target.value)}/>
         
//         </div>
//         <div className="button-container">
//         <button type="submit">Login</button>
//         </div>
//       </form>
      
//       <Link to='/nextpage'><p style={myStyle}>Forgot Password?</p></Link>
//       <CopyRightTag />
//     </div></div>

{/* <form>
        <input type="text" name= "uname"id="inputField" placeholder='Username' value={inputValue} onChange={handleInputChange} className='login-field'/>
        {renderErrorMessage("uname")}

        <input type="password" name="pass"placeholder='password'  value={passwordValue} onChange={handlePasswordChange} className='login-field' /><br />
        {renderErrorMessage("pass")}
        <button className='btn btn-primary' onClick={handleButtonClick}>Login</button>
      </form> */}
       {/* <div className="login-form"> */}
        
        {/* {isSubmitted ? <div><HomePage/></div>: renderForm} */}
      {/* </div> */}
      {/* <br></br> */}

    {/* </div>
    </div> */}

    {/* // <div> */}
    {/* //   {showError && <p className='error-message' style={myError} */}
   {/* // {showPasswordError && <p className='error-message' style={myError}>Please enter a password.</p>}
    //   <br></br>
    //   <button className='btn btn-primary' onClick={handleButtonClick}>Login</button>
    // </div> */}