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
    const [dueDate, setDueDate] = useState("");
    const [waterUsuage, setWaterUsage] = useState("");
    const [noOfMeters, setNoOfMeters] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleBillingCycle = (event) => {
        setBillingCycle(event.target.value);
    };
    const handlePaymentDueDate = (event) => {
        setBillingCycle(event.target.value);
    };
    const handleWaterUsage = (event) => {
        setWaterUsage(event.target.value);
    };
    const handleMeters = (event) => {
        setNoOfMeters(event.target.value);
    };
    
    
    const handleBank = (event) => {
        setBank(event.target.value);
    };
    const handleAccountNo = (event) => {
        setAccountNo(event.target.value);
    };
    const handleContact = (event) => {
        setContact(event.target.value);
    };
    // const handleConfirmPasswordChange = (event) => {
    //     setConfirmPassword(event.target.value);
    //     setPasswordMatch(event.target.value === password);
    //   };
    

    
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
            email: event.target.email.value,
            contactNum: event.taget.contactNum.value,
            fullname: event.target.fullname.value,
            email: event.target.email.value,
            jobTitle: event.target.value,
            billingCycle : billingCycle,
            accountNo : accountNo,
            bankName : bankName,
            dueDate : dueDate,
            waterUsuage : waterUsuage,
            noOfMeters : noOfMeters,
            

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
                <h4 className="spacingH4">
                    <b style={color_style} > Company Details</b>
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
                                    <input type="text" name = "fullname" id="inputField" placeholder='Full Name' className='login-field'/><br /> 
                                    <input type="text" name = "email" id="inputField" placeholder='Email Address' className='login-field'/><br />
                                    <input type="text" name = "jobTitle" id="inputField" placeholder='Job Title' className='login-field'/><br />
                                    <input type="text" name = "contactNum" id="inputField" placeholder='Contact Number' className='login-field'/><br />

                                </td>   
                            </tr>
                        </table>
                    </div>
               
                    <div>
                        <h4 className="spacingH4Payment">
                            <b style={color_style} > Payment Details</b>
                        </h4>
                    </div>
                    <div className='MyCompanyDetails'>
                        <table className='myTable' >
                            <tr className='myRadioButton'>
                                <td>
                                    <label>Payment Method:</label>
                                </td>
                                <td>
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <span style={{paddindLeft:'10px',paddingRight:'10px'}}> Esewa</span>
                                
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <span style={{paddindLeft:'10px',paddingRight:'10px'}}> Khalti</span>
                                
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <span style={{paddindLeft:'10px',paddingRight:'10px'}}> Bank Name</span>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <label>Bank Name:</label>
                                </td>
                                <td>
                                    <input type="text" id="inputField" placeholder='Bank Name' name = "bankName" value={bankName} className='login-field' onChange={handleBank}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Account Number:</label>
                                </td>
                                <td>
                                    <input type="text" id="inputField" placeholder='Account Number'  value={accountNo}className='login-field' onChange={handleAccountNo}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Billing Cycle:</label>
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
                                    <input type="text" id="inputField" placeholder='Due Date' value={dueDate} className='login-field' onChange={handlePaymentDueDate}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Estimated Water Usage:</label>
                                </td>
                                <td>
                                    <input type="text" id="inputField" placeholder=' Water Usuage' value={waterUsuage} className='login-field' onChange={handleWaterUsage}/><br/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>No. of meters required: </label>
                                </td>
                                <td>
                                    <input type="text" id="inputField" placeholder='No. of meters ' value={noOfMeters} className='login-field' onChange={handleMeters} /><br/>
                                </td>
                            </tr>
                        </table>
                    </div>
                    

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <label className="form-check-label" >
                        By submitting this form, I agree to the terms and conditions of the WaveBilling and any applicable policies, rules, or regulations.
                        </label>
                    </div>
                    {errorMsg && <p className="error" style={{color:'red'}}>{errorMsg}</p>}
                    <input type="submit" value="Submit" id="my-button" /><br/>
                    <Link><button >Go Back</button></Link>
                
                 </form>
            </div>
            </div>
            
        </div>
        </div>
    );
}
export default Register;