import MyImage from '../Image/profile.png';
import {useState} from 'react';
import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import '../Css/EditProfile.css';
import axios from 'axios';

function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length > 10) {
      return false; // Phone number is too long
    }
    return true; // Phone number is valid
}

function EditProfile(){
    const textcolor = {
        color: '#525252',
        
    };

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [userName, setUsername] = useState("");
    const [phoneNum, setPhoneNum] = useState(false);
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState("");
    const [tel1Error, setTelError] = useState("");

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleNewPassword = (event) => {
        setNewPassword(event.target.value);
    };
    
    
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
   
    const handleAddress = (event) => {
        setAddress(event.target.value);
    };
    const handleContact = (event) => {
        setPhoneNum(event.target.value);
        if (!validatePhoneNumber(phoneNum)) {
          setTelError("Phone number must be 10 digits or less");
        } else {
          setTelError("");
        }
      };
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            password: password,
            newPassword: newPassword,
            userName: userName,
            phoneNum: phoneNum,
            email: email,
            address: address,
        };
        axios.post('', data)
        .then(response => {
            console.log(response)
                
        })
        .catch(error => console.log(error));
        
    };
    

    return(
        <div className='containerHome'>
            <div className='left-left-nav'>
                <Sidebars/>
            </div>
            <div className='right-right-nav-Home'>

            
            <div className=''>
                <Nav/>
            </div>
            
            <div className='' id='EditProfile'>
                <div className='d-flex'>
                    <div className='changeSection'>
                        <div>
                            
                            <img src={MyImage} alt='My Profile' style={{  paddingBottom: '20px' }} />
                            <u><p style={{color:'#2F4858'}}>Change Profile Picture</p></u>
                        </div>
                        <div>
                            <label>Current Password</label><br/>
                            <input type="password" id="editFirstName" placeholder='Current Password'  className='login-field'/>{'\n'}<br/> 
                            <label> New Password</label><br/>
                            <input type="password" id="editLastName" placeholder='New Password'  className='login-field'  />{'\n'}<br/>
                            <label>Confirm Password</label><br/>
                            <input type="password" id="editLastName" placeholder='Re-type new password'  className='login-field' />{'\n'}<br/>

                        </div>
                    </div>
               
                
                    <div>
                        <p><form>
                            <b style={textcolor}>Username: </b> {'\n'}<br/>
                            <input type="text" id="editEmail" placeholder='eg. sugam123'  className='login-field' required/>{'\n'}<br/> 
                            
                            <div>
                                <b style={textcolor}>Phone Number :</b>  {'\n'}<br/>
                                <input type="text" id="editEmail" placeholder='9880302189'  className='login-field'  style={{  marginBottom: '20px' }}/>{'\n'}
                                {tel1Error && <div className="error" style={{ color: 'red' }}>{tel1Error}</div>}
                            </div>
                            <div>
                                <b style={textcolor}>Email address :</b>  {'\n'}<br/>
                                <input type="text" id="editEmail" placeholder='eg. sugampaudyal@gmail.com'  className='login-field'  style={{  marginBottom: '20px' }}/>{'\n'}  
                            </div>
                            <div>
                                <b style={textcolor}>Address :</b>  {'\n'}<br/>
                                <input type="text" id="editEmail" placeholder='eg. Bishalnaghar -5, Kathmandu'  className='login-field'  style={{  marginBottom: '20px' }}/>{'\n'}  
                            </div>
                            
                            
                            <button className='btn btn-primary'  style={{  marginTop: '8px' }}>Save Changes</button>

                        </form>
                        </p> 
                    </div>
                </div >       
            </div>

            </div>
        </div>
    )
}
export default EditProfile;