import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css';
import '../Components/form.css';
import '../Components/SmallLogo.css';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import '../NavbarFolders/LandingNav.css'; 

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  
  return (
    <div className='navbar_wrapper'>
  
    <Nav className='nav_pills nav_justified navbar-links'>
      <Link to='/homela' className='navbar-brand'>
        {/* <MyImageComponent src={MyImage} alt='Wave Billing System Logo' className='smallsize'/> */}
      </Link>
      <NavItem>
            <Nav.Link href="#services" active={activeLink === 'services'} onClick={() => setActiveLink('services')}>
            Services
            </Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link href="#aboutus" active={activeLink === '/mybills'} onClick={() => setActiveLink('/mybills')}>
          About Us
        </Nav.Link>
      </NavItem>
     
      <NavItem  >
        <Nav.Link as={Link} to='/login' active={activeLink === '/myaccount'} onClick={() => setActiveLink('/myaccount')}>
          Log In
        </Nav.Link>
      </NavItem>
      <NavItem className='signup_css'>
        <Nav.Link as={Link} to='/signinas' active={activeLink === '/myaccount'} onClick={() => setActiveLink('/myaccount')}>
          Sign Up
        </Nav.Link>
      </NavItem>
    </Nav>
 
</div>

  );
}

export default Navbar;

