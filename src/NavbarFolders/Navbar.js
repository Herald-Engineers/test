import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css';
import '../Components/form.css';
import '../Components/SmallLogo.css';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import '../NavbarFolders/LandingNav.css'; 
import Dropp from '../NavbarFolders/dropdown';
import MyImage from '../Image/logo123.png';
import Notify from '../Components/Notification';

function NavbarHomePage() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const hasNotification = true;
  return (
    <div className='navbar-wrapper'>
    <Nav className=' navbar-nav ml-auto' style={{  }}>
      
      
        <NavItem>
          <div style={{color: 'black ', marginBottom:'10px'} }>
            <Notify  hasNotification={hasNotification}/>
            {/* <Dropp/> */}
          </div>
          
        </NavItem>
      
    </Nav>
  </div>
  );
}

export default NavbarHomePage;

