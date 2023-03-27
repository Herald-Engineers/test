import React, { useEffect } from 'react';
import {useState} from 'react';
import '../SignUp/Sign.css';
import MyLogo from '../Image/logo123.png';
import step11 from '../Image/step11.png';
import step22 from '../Image/step22.png';
import step33 from '../Image/step33.png';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function Register(){
    // const navigate = useNavigate();
    const color_style ={
            color: '#525252',
    };
    
    const [billingCycle, setBillingCycle] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [contactNum, setContact] = useState("");
    const [bankName, setBank] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleBillingCycle = (event) => {
        setBillingCycle(event.target.value);
    };
    ;
    
    const handleBank = (event) => {
        setBank(event.target.value);
    };
    const handleAccountNo = (event) => {
        setAccountNo(event.target.value);
    };
    const handleContact = (event) => {
        setContact(event.target.value);
    };
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setPasswordMatch(event.target.value === password);
      };
    

    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!isChecked) {
            setErrorMsg('*Please agree to all terms and conditions');
        } 
        else {
            // handle form submission
        
            const data = {
            companyName: event.target.companyName.value,
            address: event.target.address.value,
           
           
            contactNum: contactNum,
            username: username,
            password: password,

            };
            axios.post('https://wavebilling-backend-sabinlohani.onrender.com/register', data)
            .then(response => {
                <p>successful</p>
                console.log(response)})
            .catch(error => console.log(error));
        }
      };
    return(
        <div>

      
        <div className='register_company '> 
            <div className='d-flex' style={{borderBottom:'1px solid #B9B9B9'}}>
                <div style={{ height:'100px'}}>
                    <img src={MyLogo} alt="Kathmandu Upatyaka Khanepani Limited" className="userImage" />
                </div>
                <div> 
                    <h3 style={{paddingTop:'39px'}}>Register Your Account</h3>
                </div>
            </div>
            <div className='container_wrapper'>
                <p style={{color: '#525252',paddingLeft: '23px', paddingTop:'60px'}} >Fill the form below to create an account.</p>
                <div className='d-flex myimagecontainer'>
                    <div>
                    <img src={step11} alt="Kathmandu Upatyaka Khanepani Limited" className="Community-image" />
                    </div>
                    <div>
                    <img src={step22} alt="Kathmandu Upatyaka Khanepani Limited" className="Community-image" />
                    </div>
                    <div>
                    <img src={step33} alt="Kathmandu Upatyaka Khanepani Limited" className="Community-image" />
                    </div>
                </div>
            
            <div>
                <h4>
                    <b style={color_style} className="PersonalInformation"> Company Details</b>
                </h4>
            </div>
            <div className='formWrapper'>
                <form action="/action_page.php" onSubmit={handleSubmit} className=" ">
                    <div className='MyCompanyDetails'>
                        <table className='myTable'>
                            <tr>
                                <td>
                                    <label>Company Name:</label>
                                </td>
                                <td>
                                    <input type="text" name = "companyName"id="inputField" placeholder='Company Name' className='login-field'/><br />       
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Address:</label>
                                </td>
                                <td>
                                    <input type="text" name = "address"id="inputField" placeholder='Address' className='login-field'/><br />    
                                </td>   
                            </tr>
                            <tr>
                                <td>
                                    <label>Email:</label>
                                </td>
                                <td>
                                    <input type="text" name = "address"id="inputField" placeholder='Email Address' className='login-field'/><br />    
                                </td>   
                            </tr>
                            <tr>
                                <td>
                                    <label>Primary Contact Details:</label>
                                </td>
                                <td>
                                    <input type="text" name = "address" id="inputField" placeholder='Full Name' className='login-field'/><br /> 
                                    <input type="text" name = "email" id="inputField" placeholder='Email Address' className='login-field'/><br />
                                    <input type="text" name = "jobTitle" id="inputField" placeholder='Job Title' className='login-field'/><br />
                                    <input type="text" name = "contact" id="inputField" placeholder='Contact Number' className='login-field'/><br />

                                </td>   
                            </tr>
                        </table>
                    </div>
               
                    <div>
                        <h4>
                            <b style={color_style} className="PersonalInformation"> Payment Details</b>
                        </h4>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td>
                                    <label>Bank Name</label>
                                </td>
                                <td>
                                    <input type="text" id="inputField" placeholder='Bank Name' name = "bank" value={bankName} className='login-field' onChange={handleBank}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Account Number</label>
                                </td>
                                <td>
                                    <input type="text" id="inputField" placeholder='Account Number'  value={accountNo}className='login-field' onChange={handleAccountNo}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Billing Cycle</label>
                                </td>
                                <td>
                                    <input type="text" id="inputField" placeholder='Billing Cycle '  value={billingCycle} className='login-field' onChange={handleBillingCycle}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Payment Due Date:</label>
                                </td>
                                <td>
                                    <input type="text" id="inputField" placeholder='Username for admin ' value={username} className='login-field' onChange={handleUsernameChange}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Estimated Water Usage:</label>
                                </td>
                                <td>
                                    <input type="password" id="inputField" placeholder='Estimated Water Usuage' value={password} className='login-field' onChange={handlePasswordChange}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>No. of meters required: </label>
                                </td>
                                <td>
                                    <input type="password" id="inputField" placeholder='No. of meters required' value={confirmPassword} className='login-field' onChange={handleConfirmPasswordChange} /><br/>
                                </td>
                            </tr>
                        </table>
                    </div>
                    

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <label className="form-check-label" >
                            Agreed to all terms and conditions.
                        </label>
                    </div>
                    {errorMsg && <p className="error" style={{color:'red'}}>{errorMsg}</p>}
                    <input type="submit" value="Submit" id="my-button" />
                
                 </form>
            </div>
            </div>
            
        </div>
        </div>
    );
}
export default Register;