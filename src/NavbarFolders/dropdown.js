import React, { useState } from 'react';
import Account from '../Image/myaccount.png';
import '../NavbarFolders/nav.css';
import { Dropdown } from 'react-bootstrap';
import PopUp1 from '../LandingPage';
import PopUp2 from '../HomePage/EditProfile';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';


function Drop() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogOut = () => {
    navigate('/');
  };
  const handleEditProfile = () => {
    navigate('/editprofile');
  };


  return (
    <div>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <img src={Account}  className="" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleShow}>Setting</Dropdown.Item>
        <Dropdown.Item onClick={handleEditProfile}>Edit Profile</Dropdown.Item>
        <Dropdown.Item onClick={handleShow}>Log Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


  

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogOut}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
    

    
  );
}

export default Drop;