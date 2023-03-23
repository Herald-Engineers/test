
import React, { useEffect } from 'react';
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
import axios from 'axios';

// const url = 'https://wavebilling-backend-sabinlohani.onrender.com/login ';
 function Login() {
  const myStyle = {
    color: '#0A83F0',
  }
   
//     width: '320px',
//    height: '40px',
//   };

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('https://wavebilling-backend-sabinlohani.onrender.com/login', {
//         username,
//         password,
//       });

//       if (response.data.success) {
//         // Username and password are correct, user is authenticated
//         console.log('Login successful');
//       } else {
//         setError('Invalid username or password');
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again later.');
//     }
//   };

  return (
    <div className='container-login'>
      <div className="form">
        <img src={MyImage} alt='Wave Billing System Logo'  className='forgetLogo' />
        <h4 className='fontfamily'>LOGIN TO CONTINUE</h4>
        <form>
          <div className="input-container">
          
            <input type="text"   placeholder='Username' className='login-field'  />
          
          </div>
          <div className="input-container">
            
            <input type="password"      placeholder='Password' className='login-field' />
          
          </div>
          <div className="button-container">
            <Link to='/homela'> <button type="submit">Login</button></Link>
          </div>
        </form>
        
        <Link to='/nextpage'><p style={myStyle}>Forgot Password?</p></Link>
        <CopyRightTag />
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