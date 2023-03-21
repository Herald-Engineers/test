import React from 'react';
import { Nav } from 'react-bootstrap';
import MyImage2 from '../Image/logo123.png';
import '../Css/Sidebar.css';
function Sidebar(){
    const style={
        color: 'black',
        FontSize: '25px',
    }
    return(
        <div className="sidebar">
            <div className='sidebar-section text-center'>
                <img src={MyImage2} alt="Wave Billing System" className="my-specific-image" /> 
                <Nav className="flex-column">
                    <Nav.Link href="#home"  className='sidebar-fonts'>Dashboard</Nav.Link>
                    <Nav.Link href="#about"  className='sidebar-fonts'>My Bills</Nav.Link>
                </Nav>
            </div>
        </div>
    );
}
export default Sidebar;