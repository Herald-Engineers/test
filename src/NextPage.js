import React from 'react';
import MyImage from './Image/logo123.png';
import './App.css';
import './Components/form.css';
import { Link } from 'react-router-dom';

function NextPage() {
  
  
  return (
    <div className='container-login'>
      <img src={MyImage} alt='Wave Billing System Logo' className='forgetLogo'/>
      <h4 className='fontfamily'>RESET THE PASSWORD</h4>
      <form>
            <input type="text" placeholder="Enter your username" className="login-field"/>
        </form>
     
      <Link to="/otp"><button className='btn btn-primary'>SEND OTP</button></Link>
      
    </div>
  );
}

export default NextPage;