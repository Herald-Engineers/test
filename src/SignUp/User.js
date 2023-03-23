import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
function User() {
  const color_style ={
    color: '#525252',
};
const supplementary ={
  color: '#525252',
  marginTop: '30px',
  marginBottom: '10px',
};
const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogOut = () => {
    alert('Your account has been successfully created!');
    navigate('/');
  };
  const handleEditProfile = () => {
    navigate('/editprofile');
  };
  
  return ( 
    <div className="container">
      <div className="contanier-box">
        <h1 style={color_style}>User account request</h1>
        <p style={color_style}>Please fill in this form to create an account.</p>
        <br/>
        
        <h4>
          <b style={color_style}>Personal Information</b>
        </h4>
        <form action="#" method="post">
          <label for="first-name" className="align_items">Name:</label><br/>
          <div className="d-flex">
            <div>
              <input type="text" id="first-name" name="first-name" placeholder="Firstname" required /><br/>
            </div>
            <div>
              <input type="text" id="last-name" name="last-name" placeholder="Lastname"  required/><br/>
            </div>
          </div>  
      
      <label for="address">Address:</label><br/>
      <div className="d-flex">
        <div>
         <input type="text" id="houseNo" name="address" placeholder="House No" required/>{'\n'}</div>
        <div>  <input type="number" id="tol" name="address" placeholder="Tol" required/><br/>{'\n'}</div>
          
        </div>
        <div className="d-flex">
       
          <div><input type="number" id="ward" name="address" placeholder="Ward" required/>{'\n'} </div>
          <div><input type="text" id="municipality" name="address" placeholder="Municipality" required/><br/></div>
        
     
      </div>
      
      <div className="d-flex">
        <div>

            <label for="telephone">Telephone(1):</label><br/>
      <input type="tel" id="telephone" name="telephone" placeholder="Telephone No. 1" required/><br/>
        </div>

        <div>
        <label for="telephone">Telephone(2):</label><br/>
      <input type="tel" id="telephone2" name="telephone" placeholder="Telephone no. 2(Optional)" required/><br/>
     
      </div>
      </div>
       <label for="email">Email Address:</label><br/>
      <input type="email" id="myemail" name="email" placeholder="Email Address" required/><br/>
      <div className="d-flex">
          <div>
            <label for="nationality">Nationality:</label><br/>
        <input type="text" id="nationality" name="nationality" placeholder="Nationality" required/><br/>
          </div>
        <div>
          <label for="citizenship-number">Citizenship Number:</label><br/>
          <input type="text" id="citizenship-number" name="citizenship-number" placeholder="Citizenship No." required/><br/>

        </div>
        <div>
          <label for="passport-number">Passport Number(Optional):</label><br/>
          <input type="text" id="passport-number" name="passport-number(Optional)" placeholder="Passport No."/><br/>

        </div>
        
      </div>
      
      <h4 style={supplementary}>
          <b>Add Supplementary Information(Optional)</b>
        </h4>
      <div className="d-flex ">
        <div>
          
      <input type="text" id="supplementary-name" name="supplementary-name" placeholder="Name" className="spacing"/><br/>
        </div>
        <div>
        
      <input type="tel" id="supplementary-telephone" name="supplementary-telephone" placeholder="Telephone" className="spacing"/><br/>
      
        </div>
        <div>
          
      <input type="email" id="supplementary-email" name="supplementary-email" placeholder="Email" className="spacing"/><br/>
        </div>
        
      </div>
    
      <h4 style={supplementary}>
          <b>Please submit the softcopy of the following documents:</b>
        </h4>
      <div className="d-flex">
        <div>
          <label for="citizenship-doc">- Citizenship Document:</label><br/>
      <input type="file" id="citizenship-doc" name="citizenship-doc" accept=".pdf,.doc,.docx" className="choosefile"required/><br/>
        </div>
        <div>
          <label for="land-doc">- Land Ownership Document:</label><br/>
      <input type="file" id="land-doc" name="land-doc" accept=".pdf,.doc,.docx" required/><br/>
        </div>
      
      
      </div>
      
      <input type="submit" value="Submit" id="my-button" onClick={handleShow}/>
      <Link  to='/signinas'>  <button className='goBack'> Go Back</button></Link>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create an account </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, you want to create an account?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLogOut}>
            Confirm
          </Button>
      
        </Modal.Footer>
      </Modal>
    
    </form>

    </div>
  </div>);
}
export default User;