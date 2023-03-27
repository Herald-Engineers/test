import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import step1 from '../Image/step1.png';
import step2 from '../Image/step2.png';
import step3 from '../Image/step3.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyLogo from '../Image/logo123.png';
function validatePhoneNumber(phoneNumber) {
  if (phoneNumber.length > 10) {
    return false; // Phone number is too long
  }
  return true; // Phone number is valid
}

function User() {
  const color_style = {
    color: '#525252',
  };
  const supplementary = {
    color: '#525252',
    marginTop: '30px',
    marginBottom: '10px',
  };
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [tole, setTole] = useState("");
  const [wardNo, setWardNo] = useState("");
  const [tel1, setTel] = useState("");
  const [tel2, setTel2] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [citizenshipNo, setcitizenshipNo] = useState("");
  const [citizenshipDoc, setCitizenshipDoc] = useState("");
  const [landOwnershipDoc, setLandOwnershipDoc] = useState("");
  const [tel1Error, setTelError] = useState("");
  const [tel2Error, setTel2Error] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleMiddleName = (event) => {
    setMiddleName(event.target.value);
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
    if (!validatePhoneNumber(tel1)) {
      setTelError("Phone number must be 10 digits or less");
    } else {
      setTelError("");
    }
  };
  const [isChecked, setIsChecked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const handleTel2 = (event) => {
    setTel2(event.target.value);
    if (!validatePhoneNumber(tel2)) {
      setTel2Error("Phone number must be 10 digits or less");
    } else {
      setTel2Error("");
    }
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
    if (!isChecked) {
      setErrorMsg('*Please agree to all terms and conditions');
  } 
  else {
    const citizenshipDocFile = event.target.citizenshipDoc.files[0];
    const landOwnershipDocFile = event.target.landOwnershipDoc.files[0];
  
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('middleName', middleName);
    formData.append('lastName', lastName);
    formData.append('houseNo', houseNo);
    formData.append('tole', tole);
    formData.append('wardNo', wardNo);
    formData.append('municipality', event.target.municipality.value);
    formData.append('province', event.target.province.value);
    formData.append('tel1', tel1);
    formData.append('tel2', tel2);
    formData.append('email', email);
    formData.append('nationality', nationality);
    formData.append('citizenshipNo', citizenshipNo);
    formData.append('citizenshipDoc', citizenshipDocFile);
    formData.append('landOwnershipDoc', landOwnershipDocFile);      
  
    axios.post('https://wavebilling-backend-sabinlohani.onrender.com/request-account', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response);
      console.log("successful");
    })
    .catch(error => console.log(error));
  }
  };
  
  return ( 
    <div>
      {/* top part */}
      <div className='d-flex' style={{borderBottom:'1px solid #B9B9B9'}}>
        <div style={{ height:'100px'}}>
          <img src={MyLogo} alt="Kathmandu Upatyaka Khanepani Limited" className="userImage" />
        </div>
        <div> 
          <h3 style={{paddingTop:'39px'}}>Request User Account</h3>
        </div>
      </div>

      {/* down section */}

      <div className="container">
        <div className="contanier-box">
          <p style={{color: '#525252',paddingLeft: '23px', paddingTop:'60px'}} >Fill the form below to create an account.</p>
          <br />
          <form>
          {/* image section flex */}
          <div className='d-flex myimagecontainer'>
            <div>
              <img src={step1} alt="Kathmandu Upatyaka Khanepani Limited" className="Community-image" />
            </div>
            <div>
              <img src={step2} alt="Kathmandu Upatyaka Khanepani Limited" className="Community-image" />
            </div>
            <div>
              <img src={step3} alt="Kathmandu Upatyaka Khanepani Limited" className="Community-image" />
            </div>
          </div>


          <div className='second-section'>
            <h4>
              <b style={color_style} className="PersonalInformation">Personal Information</b>
            </h4>
            <div className='formSection'>
              
                <label className="align_items" >Full Name:</label><br />
                
                <div className="d-flex">
                  <div>
                    <input type="text" id="first-name" value={firstName} placeholder="Firstname" required onChange={handleFirstName} /><br />
                  </div>
                  <div>
                    <input type="text" id="middle-name" value={middleName} placeholder="Middlename"  onChange={handleMiddleName} /><br />
                  </div>
                  <div>
                    <input type="text" id="last-name" value={lastName} placeholder="Lastname" required onChange={handleLastName} /><br />
                  </div>
                </div>

                <label>Address:</label><br />

                <div className="d-flex">
                  <div>
                    <input type="text" id="houseNo" name="houseNo" value={houseNo} placeholder="House No" required onChange={handleHouseNo} />{'\n'}
                  </div>
                  <div>  
                    <input type="text" id="tol" name="tole" value={tole} placeholder="Tol No" required onChange={handleTole} /><br />{'\n'}
                  </div>  
                  <div>
                    <input type="number" id="ward" name="wardNo" placeholder="Ward No" value={wardNo} required onChange={handleWard} />{'\n'}
                  </div>
                </div>
              
            

              <div className="d-flex">
                <div>
                  <select id="Municipalities" name="municipality" className="select_option" >
                    <option value="">Municiplaity</option>
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
                <div>
                  <select id="province" name="addressProvince" className="select_option" >
                    <option value="" style={color_style} >Province</option>
                    <option value="Koshi Province">Koshi Province</option>
                    <option value="Madhesh Province">Madhesh Province</option>
                    <option value="Bagmati Province">Bagmati Province</option>
                    <option value="Gandaki Province">Gandaki Province</option>
                    <option value="Province 5">Lumbini Province </option>
                    <option value="Karnali Province">Karnali Province</option>
                    <option value="Sudurpashchim Province">Sudurpashchim Province</option>    
                  </select>
                </div>
              </div>

              <label >Contact No:</label><br />
              <div className="d-flex">
                <div>
                  <input type="tel" id="telephone" name="tel1" placeholder="Telephone No" required value={tel1} onChange={handleTel1} /><br />
                  {tel1Error && <div className="error" style={{color:'red'}}>{tel1Error}</div>}
                </div>

                <div>
                  <input type="tel" id="telephone2" name="tel2" placeholder="Mobile No" value={tel2} onChange={handleTel2} /><br />
                  {tel2Error && <div className="error" style={{color:'red'}}>{tel2Error}</div>}
                </div>
              </div>

              <label>Email Address:</label><br />
              <input type="email" id="myemail" name="email" placeholder="Email Address" required value={email} onChange={handleEmail} /><br />
              
              <div className="d-flex">
                <div>
                  <label>Nationality:</label><br />
                  <input type="text" id="nationality" name="nationality" value={nationality} placeholder="Nationality" required onChange={handleNationality} /><br />
                </div>
                <div>
                  <label >Citizenship No:</label><br />
                  <input type="text" id="citizenship-number" value={citizenshipNo} placeholder="Citizenship No." required onChange={handleCitizen} /><br />

                </div>
                <div>
                  <label>Issue Date:</label><br />
                  <input type="date" id="date-number"  placeholder="Issue Date"/><br />

                </div>
              
              </div>
            </div>
          </div>

          <div className='second_sectio'>
            <h4 style={supplementary}>
              <b  className="PersonalInformatio">Documents</b>
            </h4>
            <div className='formSection'>
              <div className="d-flex ">
                <div>
                  <label >Citizenship:</label><br />
                  <input type="file" id="citizenshipDoc" name="citizenshipDoc" value={citizenshipDoc} accept=".pdf,.doc,.docx" className="choosefile" required onChange={handleCitizenDoc} /><br />
                </div>
                <div>
                  <label >Land Ownership Certificate:</label><br />
                  <input type="file" id="land-doc" name="landOwnershipDoc" value={landOwnershipDoc} accept=".pdf,.doc,.docx" required onChange={handleLandDoc} /><br />
                </div>
              </div>
              
            </div>
          </div>
          <div  className='secondSection'>

            <div className='lastsec' d-flex >
              <div><input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={() => setIsChecked(!isChecked)} /></div>
              <div><p>I hereby confirm that the information I have submitted is accurate and complete. I attest that all the details provided are true to the best of my knowledge.</p></div>
             
            </div>
          </div> 
          <div style={{textAlign:'center',paddingRight: '246px'}}>
            <center><input type="submit" value="Submit" id="my-button" /><br/>
            <Link to='/signinas'>  <button className='goBack'> Go Back</button></Link></center></div>
            </form>
          </div> 
        </div>
     
    </div>
    
  );
}

export default User;

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