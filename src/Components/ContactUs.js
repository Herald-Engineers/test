import '../Css/LandingPage.css';
import React, { useState } from 'react';
function Contact(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNum, setContact] = useState("");
    const [queries, setQueries] = useState("");
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastName = (event) => {
        setLastName(event.target.value);
    };
    
    const handleContactNum = (event) => {
        setContact(event.target.value);
    };
    
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleQueries = (event) => {
        setQueries(event.target.value);
    };
    return(
        <div className='form-section'> 
            <form>             
                <div className='d-flex '>
                    <div className='line_space'>
                        <label>First Name</label><br></br>
                        <input type="text" placeholder="First Name" className='input_name' value={firstName} required onChange={handleFirstName}/><br></br>
                        <label>Email</label><br></br>
                        <input type="text" placeholder="Email Address" className='input_name' value={email} required onChange={handleEmail}/>
                    </div>

                    <div className=''>
                        <label>Last Name</label><br></br>
                        <input type="text" placeholder="Last Name" className='input_name' value={lastName} required onChange={handleLastName}/><br></br> 
                        <label>Phone Number</label><br></br>
                        <input type="text" placeholder="Phone Number" className='input_name' value={contactNum} required onChange={handleContactNum}/>
                    </div> 
                </div>
                <div className='line_space'>
                    <p >Queries</p>
                    <textarea name="queries" id="queries" cols="60" rows="10" className='input_name' value={queries}onChange={handleQueries} /><br>
                    </br> <input type="submit" value="Submit" />
                </div>
            </form>             
        </div>
    );
}
export default Contact;