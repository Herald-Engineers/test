import Sign1 from '../Image/sign1.png';
import Sign2 from '../Image/sign2.png';
import '../SignUp/Sign.css';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

function Signin() {
    const myStyle = {
        color: 'white',
    };
    const location = useLocation();
    const { inputValue } = location.state || {};
  return (
    <div>
      <div className='d-flex justify-content-center text-center SignIn' >
        <h1 style={myStyle}>Sign In</h1>
        <h3  style={myStyle}>As</h3>
        <div className="image-container">

          <div className='box-container'>
          <Link to='/user'><img src={Sign1} alt="User" className="image_spacing" /></Link>
            <p style={myStyle}>User</p>
          </div>

          <div className='box-container'>
          <Link to='/admin'><img src={Sign2} alt="Admin" className="image_spacing" /></Link>
            <p style={myStyle}>Admin</p>
          </div>

          <div className='box-container'>
          <Link to='/nextpage'> <img src={Sign1} alt="Meter Reader" className="image_spacing" /></Link>
            <p style={myStyle}>Meter Reader</p>
          </div>

          <div className='box-container'>
          <Link to='/nextpage'> <img src={Sign1} alt="Meter Reader" className="image_spacing" /></Link>
            <p style={myStyle}>Distributor</p>
          </div>

        </div>
      </div>
      <Link to='/'><button>Go Back</button></Link>
    </div>
  );
}

export default Signin;
