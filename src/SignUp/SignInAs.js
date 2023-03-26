import Sign1 from '../Image/sign1.png';
import Sign2 from '../Image/sign2.png';
import '../SignUp/Sign.css';
// import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

function Signin() {
    const myStyle = {
        color: 'white',
    };
    // const location = useLocation();
    // const { inputValue } = location.state || {};
  return (
    
      <div className='d-flex justify-content-center text-center SignIn' >
        <h1 style={myStyle}>Sign Up</h1>
        <h3  style={myStyle}>As</h3>
        <div className="image-container">

          <div className='box-container'>
          <Link to='/user'><img src={Sign1} alt="User" className="image_spacing" /></Link>
            <p style={myStyle}>User</p>
          </div>

          <div className='box-container'>
          <Link to='/admin'><img src={Sign2} alt="Admin" className="image_spacing" /></Link>
            <p style={myStyle}>Company</p>
          </div>

          
          <br></br>
        </div>
        <div><Link to='/login'><p>Already have an account?</p></Link></div> <Link to='/'><button className='btn btn-primary' style={{width: '211px'}}>Go Back</button></Link>
      </div>
     
    
  );
}

export default Signin;
