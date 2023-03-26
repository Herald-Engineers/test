import React from 'react';
import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import '../Css/EditProfile.css';

import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{fontSize:'14px',fontWeight:'700',color:'black'}}>
                Khanepani options
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p  style={{color:'green',fontSize:'22px',fontWeight:'700'}}>Paid successfully</p>
            </Modal.Body>
        </Modal>
    );
}
function Kukl(){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div className='containerHome'>
            <div className='left-left-nav'>
                <Sidebars/>
            </div>
            <div className='right-right-nav-Home'>

            
                <div className=''>
                    <Nav/>
                </div>
                
                <div className='Kukl_center position-absolute top-50 start-50 translate-middle' id=''>
                    <form className='branch text-center'>
                        <p  style={{fontSize:'24px',fontWeight:'700',color:'#0A83F0',paddingBottom:'0px',marginBottom:'0px'}}>Branch: </p>
                        <select style={{width:'198px',height:'49px',marginBottom:'20px'}}>
                            <option>Select</option>
                            <option>Tripureshwor</option>
                            <option>Lalitpur</option>
                            <option>Bhaktapur</option>
                            <option>Chhetrapati</option>
                            <option>Maharajgung</option>
                            <option>Thimi</option>
                            <option>Kirtipur</option>
                            <option>Mahankalchaur</option>
                            <option>Kamaladi</option>
                        </select><br/>
                        <p style={{fontSize:'22px',fontWeight:'700',color:'#0A83F0',paddingBottom:'0px',marginBottom:'0px'}}>Unique Id :</p>
                        <input type="text" id="editFirstName" placeholder='Unique Id'  className='login-field' style={{marginBottom:'20px'}}required/><br/>
                        <button className='btn btn-primary' style={{marginRight: '20px',width: '80px'}}  onClick={() => setModalShow(true)}>Confirm</button>
                        <button className='btn btn-danger'>Cancel</button>
                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                    </form>
                </div>
            
            </div>
        </div>
    );
}
export default Kukl;