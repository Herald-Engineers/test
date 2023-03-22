import React from 'react';
import { Nav } from 'react-bootstrap';
import MyImage2 from '../Image/logo123.png';
import { Link } from 'react-router-dom';
import '../Css/Sidebar.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Sidebar(){
    const style={
        color: 'black',
        FontSize: '25px',
    }
    const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
    return(
        <div className="sidebar">
            <div className='sidebar-section text-center'>
            <Link to='/homela' className='navbar-brand'>
                <img src={MyImage2} alt="Wave Billing System" className="my-specific-image" /> </Link>
                <Nav className="flex-column">
                    <Nav.Link as={Link} to='/homela' active={activeLink === 'dashboard'} onClick={() => setActiveLink('dashboard')} className='sidebar-fonts'>Dashboard</Nav.Link>
                    <Nav.Link as={Link} to='/editprofile' active={activeLink === 'dashboard'} onClick={() => setActiveLink('dashboard')}  className='sidebar-fonts'>My Bills</Nav.Link>
                </Nav>
            </div>
        </div>
    );
}
export default Sidebar;



{/* <Nav className='nav_pills nav_justified navbar-links'>
      
      <NavItem>
            <Nav.Link  as={Link} to='/homela' active={activeLink === 'services'} onClick={() => setActiveLink('services')}>
            My Home
            </Nav.Link>
      </NavItem>
      
       
      <NavItem className=''>
       
       <Dropp/>
       
      </NavItem>
    </Nav> */}