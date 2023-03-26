import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function User() {
  const color_style ={
    color: '#525252',
  };
  const supplementary ={
    color: '#525252',
    marginTop: '30px',
    marginBottom: '10px',
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [tole, setTole] = useState("");
  const [wardNo, setWardNo] = useState("");
  const [tel1, setTel] = useState("");
  const [tel2, setTel2] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [citizenshipNo, setcitizenshipNo] = useState("");
  const [passportNo, setpassportNo] = useState("");
  const [supName, setSupName] = useState("");
  const [supTelephone, setSupTelephone] = useState("");
  const [supEmail, setSupEmail] = useState("");
  const [citizenshipDoc, setCitizenshipDoc] = useState("");
  const [landOwnershipDoc, setLandOwnershipDoc] = useState("");

  const handleFirstName = (event) => {
          setFirstName(event.target.value);
  };
      
  const handleLastName = (event) => {
          setLastName(event.target.value);
  };
  const handleHouseNo = (event) => {
          setHouseNo(event.target.value);
  };
      
  const handleTole = (event) => {
          setTole(event.target.value);
  };
  const handleWard = (event) => {
          setWardNo(event.target.value);
  };
  const handleTel1 = (event) => {
      setTel(event.target.value);
    };
  const handleTel2 = (event) => {
      setTel2(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value); 
  };
  const handleNationality = (event) => {
    setNationality(event.target.value); 
  };
  const handleCitizen = (event) => {
    setcitizenshipNo(event.target.value);
  };
  const handlePassport = (event) => {
    setpassportNo(event.target.value);
  };
  const handleSupName = (event) => {
    setSupName(event.target.value);
  };
  const handleSupTel = (event) => {
    setSupTelephone(event.target.value);
  };
  const handleSupEmail = (event) => {
    setSupEmail(event.target.value);
  };
  const handleCitizenDoc = (event) => {
    setCitizenshipDoc(event.target.value);
  };
  const handleLandDoc = (event) => {
    setLandOwnershipDoc(event.target.value);
  };
  


  // const [show, setShow] = useState(false);
  // const navigate = useNavigate();
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  //  const handleLogOut = () => {
  //     alert('Your account has been successfully created!');
  //     navigate('/');
  //   };
  //   const handleEditProfile = () => {
  //     navigate('/editprofile');
  //   };
    const handleSubmit = (event) => {
      event.preventDefault();
      
      
      const data = {
          firstName: firstName,
          lastName: lastName,
          houseNo: houseNo,
          tole: tole,
          wardNo: wardNo,
          municipality: event.target.municipality.value,
          tel1: tel1,
          tel2: tel2,
          email: email,
          nationality: nationality,
          citizenshipNo: citizenshipNo,
          passportNo: passportNo,
          supName: supName,
          supTelephone: supTelephone,
          supEmail: supEmail,
          citizenshipDoc: citizenshipDoc,
          landOwnershipDoc: landOwnershipDoc,
      };
      axios.post('https://wavebilling-backend-sabinlohani.onrender.com/request-account', data)
      .then(response => {
        console.log(response);
        console.log("successful");
      })
          .catch(error => console.log(error));
    
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
        <form action="/action_page.php" onSubmit={handleSubmit}>
          <label  className="align_items" >Name:</label><br/>
          <div className="d-flex">
            <div>
              <input type="text" id="first-name"  value={firstName}placeholder="Firstname" required  onChange={handleFirstName}/><br/>
            </div>
            <div>
              <input type="text" id="last-name" value={lastName}placeholder="Lastname"  required  onChange={handleLastName}/><br/>
            </div>
          </div>  
      
            <label >Address:</label><br/>
      <div className="d-flex">
        <div>
         <input type="text" id="houseNo" name="houseNo"value={houseNo} placeholder="House No" required onChange={handleHouseNo}/>{'\n'}</div>
        <div>  <input type="text" id="tol" name="tole" value={tole} placeholder="Tol" required onChange={handleTole}/><br/>{'\n'}</div>
          
        </div>
        <div className="d-flex">
       
          <div><input type="number" id="ward" name="wardNo" placeholder="Ward" value={wardNo} required onChange={handleWard}/>{'\n'} </div>
          <div>
            <select id="Municipalities" name="municipality" className="select_option" >
                <option value="">    Address(Municiplaity)</option>
                    <option value="Kathmandu">    Kathmandu Metropolitan City  </option>
                    <option value="Lalitpur">    Lalitpur Metropolitan City </option>
                    <option value="Bhaktapur">    Bhaktapur Municipality</option>
                    <option value="Pokhara">    Pokhara Metropolitan City</option>
                    <option value="Biratnagar">    Biratnagar Metropolitan City</option>
                    <option value="Dharan">    Dharan Sub-metropolitan City</option>
                    <option value="Birgunj">    Birgunj Metropolitan City</option>
                    <option value="Janakpur">    Janakpur Sub-metropolitan City</option>
                    <option value="Hetauda">    Hetauda Sub-metropolitan City</option>
                    <option value="Butwal">    Butwal Sub-metropolitan City</option>
                    <option value="Nepalgunj">    Nepalgunj Sub-metropolitan City</option>
                    <option value="Tulsipur">    Tulsipur Sub-metropolitan City</option>
                    <option value="Siddharthanagar">    Siddharthanagar Municipality</option>
                    <option value="Dhangadhi">    Dhangadhi Sub-metropolitan City</option>
                    <option value="Mahendranagar">    Mahendranagar Municipality</option>
                    <option value="Birendranagar">    Birendranagar Municipality</option>
                    <option value="Surkhet">    Surkhet Municipality</option>
                    <option value="Gulariya">    Gulariya Municipality</option>
                    <option value="Rajbiraj">   Rajbiraj Municipality</option>
                    <option value="Dhankuta">    Dhankuta Municipality</option>
                    
            </select>
          </div>
        
     
      </div>
      
      <div className="d-flex">
        <div>

            <label >Telephone(1):</label><br/>
      <input type="tel" id="telephone" name="tel1" placeholder="Telephone No. 1" required value={tel1} onChange={handleTel1}/><br/>
        </div>

        <div>
        <label>Telephone(2):</label><br/>
      <input type="tel" id="telephone2" name="tel2" placeholder="Telephone no. 2(Optional)" value={tel2} onChange={handleTel2}/><br/>
     
      </div>
      </div>
       <label>Email Address:</label><br/>
      <input type="email" id="myemail" name="email" placeholder="Email Address" required value={email}onChange={handleEmail}/><br/>
      <div className="d-flex">
          <div>
            <label>Nationality:</label><br/>
        <input type="text" id="nationality" name="nationality"value={nationality} placeholder="Nationality" required onChange={handleNationality}/><br/>
          </div>
        <div>
          <label >Citizenship Number:</label><br/>
          <input type="text" id="citizenship-number"  value={citizenshipNo} placeholder="Citizenship No." required onChange={handleCitizen}/><br/>

        </div>
        <div>
          <label>Passport Number(Optional):</label><br/>
          <input type="text" id="passport-number"  value={passportNo}placeholder="Passport No." onChange={handlePassport}/><br/>

        </div>
        
      </div>
      
      <h4 style={supplementary}>
          <b>Add Supplementary Information(Optional)</b>
        </h4>
      <div className="d-flex ">
        <div>
          
      <input type="text" id="supplementary-name" name="supName"value={supName} placeholder="Name" className="spacing" onChange={handleSupName}/><br/>
        </div>
        <div>
        
      <input type="tel" id="supplementary-telephone" name="supTelephone" value={supTelephone} placeholder="Telephone" className="spacing"  onChange={handleSupTel}/><br/>
      
        </div>
        <div>
          
      <input type="email" id="supplementary-email" name="supEmail" value={supEmail}placeholder="Email" className="spacing"  onChange={handleSupEmail}/><br/>
        </div>
        
      </div>
    
      <h4 style={supplementary}>
          <b>Please submit the softcopy of the following documents:</b>
        </h4>
      <div className="d-flex">
        <div>
          <label >- Citizenship Document:</label><br/>
      <input type="file" id="citizenshipDoc" name="citizenshipDoc"value={citizenshipDoc}accept=".pdf,.doc,.docx" className="choosefile"required onChange={handleCitizenDoc}/><br/>
        </div>
        <div>
          <label >- Land Ownership Document:</label><br/>
      <input type="file" id="land-doc" name="landOwnershipDoc" value={landOwnershipDoc} accept=".pdf,.doc,.docx" required onChange={handleLandDoc}/><br/>
        </div>
      
      
      </div>
      
      <input type="submit" value="submit" id="my-button" />
      <Link  to='/signinas'>  <button className='goBack'> Go Back</button></Link>

      {/* <Modal show={show} onHide={handleClose} animation={false}>
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
      </Modal> */}
    
      </form>

      </div>
    </div>
  );
    }

export default User;