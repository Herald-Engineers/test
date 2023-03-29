import React, { useState } from 'react';
import '../Admin/MeterReader.css';
import {BiAddToQueue} from "react-icons/bi";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function MyVerticallyCenteredModal(props) {

    const [fullName, setFullname] = useState("");
    const [readerId, setReader] = useState("");
    const [password, setPassword] = useState("");
    const [contactNo, setContact] = useState("");
    const [email, setEmail] = useState("");
    const handleFullName = (event) => {
        setFullname(event.target.value);
    };
    const handleReader = (event) => {
        setReader(event.target.value);
    };
    
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleContact = (event) => {
        setContact(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const [serverResponseReceived, setServerResponseReceived] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
       
            
            const formData = new FormData();
            formData.append('fullName', fullName);
            formData.append('readerId', readerId);
            formData.append('password', password);
            formData.append('contactNo', contactNo);
            formData.append('email', email);
                  
        
            axios.post('https://wavebilling-backend-sabinlohani.onrender.com/request-account', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
            .then(response => {
            console.log(response);
            
            setServerResponseReceived(true);
            console.log("successful");          
            setLoading(false);
            
            })
            .catch(error => console.log(error));
        
    };
    return (
        <Modal
        {...props}
       size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered  
      >
        
    <Modal.Body style={{padding:'60px',backgroundColor:'#D9D9D9'}}>
            <center>
                <span style={{color: '#32325D',fontSize:'30px',fontWeight:'700'}}>Create an account</span>
            </center>
            <div className='main-box text-center'>
            
                <p>Please enter the Reader ID and temporary password for the Reader.</p>
                <div className='meter-Table'>
                    <form onSubmit={handleSubmit}>
                        <table >
                            <tr>
                                <td>
                                    <label>Full Name:</label> 
                                </td>
                                <td>
                                    <input type="text" id="editFirstName" placeholder='Full Name'   value={fullName} onChange={handleFullName} requiredclassName='login-field'/>{'\n'}<br/>
                                </td>
                            </tr>
                            <tr>    
                                <td> <label>Reader Id:</label><br/>
                                </td>
                                <td>
                                    <input type="text" id="editFirstName" placeholder='Reader Id' value={readerId} onChange={handleReader} required className='login-field'/>{'\n'}<br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Password:</label> 
                                </td>
                                <td>
                                    <input type="text" id="editFirstName" placeholder='Password' required value={password} onChange={handlePassword}className='login-field'/>{'\n'}<br/>
                                </td>
                            </tr>
                            <tr>    
                                <td> <label>Contact No:</label><br/>
                                </td>
                                <td>
                                    <input type="text" id="editFirstName" placeholder='Contact' required value={contactNo} onChange={handleContact}className='login-field'/>{'\n'}<br/>
                                </td>
                            </tr>
                            <tr>    
                                <td> <label>Email Address:</label><br/>
                                </td>
                                <td>
                                    <input type="text" id="editFirstName" placeholder='Email' required value={email} onChange={handleEmail} className='login-field'/>{'\n'}<br/>
                                </td>
                            </tr>
                        </table>
                    </form>
                    
                </div>
               
               
                <p>You are requested to login using this official User ID and change the<br/> password as soon as you login into your account for future confidentiality. </p>
                <Button onClick={props.onHide} className='i-understand'>Go Back</Button>
                <Button onClick={props.onHide} className='i-understand'>Save and Submit</Button>
            </div>
        </Modal.Body>
       
      </Modal>
    
    );
}
function MeterRead(){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div>
            <div className="d-flex">
                <BiAddToQueue />
                <p onClick={() => setModalShow(true)}>Create an account</p>
                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
            </div>
            

        </div>
    );
}
export default MeterRead;