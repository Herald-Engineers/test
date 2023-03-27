import Sign1 from '../Image/sign1.png';
import Sign2 from '../Image/sign2.png';
import '../SignUp/Sign.css';
import Copyright from '../Components/Copyright';
// import { useLocation } from 'react-router-dom';
import LoginSec from '../Image/LoginSec.png';
import { Link } from 'react-router-dom';

import MyImage from '../Image/logo123.png';

function Signin() {
    const myStyle = {
        color: 'white',
    };
    // const location = useLocation();
    // const { inputValue } = location.state || {};
  return (
    <div>
      <div className='container-fluid'>
        <img src={LoginSec} alt='Protect Water'  className='MyLogin' />
      </div>
      <div className='d-flex justify-content-center text-center SignIn' >
      <img src={MyImage} alt='Wave Billing System Logo'  className='myLogo text-center' />
        <h1 >Sign Up</h1>
        <p style={{color:'#BBB6B6'}}>Get Started with WaveBilling</p>
        <div className="image-container">

          <div className='box-container'>
            <Link to='/user'><button className='btn btn-primary'>As a user</button></Link>
            
          </div>

          <div className='box-container'>
          <Link to='/admin'><button className='myCompanyButton '>As a company</button></Link>
            <p style={myStyle}>Company</p>
          </div>

          
          <br></br>
        </div>
        <div>
          <p style={{color:'#B1ABAB', fontSize:'11px'}}>Already have an account? <Link to='/login'><span>Login Now</span></Link></p>
        </div> 
        <Copyright />
      </div>
      
    </div> 
    
  );
}

export default Signin;
