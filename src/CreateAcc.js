import React from 'react';
import MyImage from './Image/logo123.png';
//import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import './Components/form.css';
import { Link } from 'react-router-dom';

function Login() {
  
  
  return (
    <div className='container-login'>
      <img src={MyImage} alt='Wave Billing System Logo' className='forgetLogo'/>
      <h4 className='fontfamily'>Create New Password</h4>
      <form>
            <input type="password" placeholder="New Password" className="login-field"/>
        </form>
        <form>
            <input type="password" placeholder="Confirm Password" className="login-field"/>
        </form>
       <Link to="/nextpage"><button className='btn btn-primary'>Confirm</button></Link>
    </div>
  );
}
export default Login;