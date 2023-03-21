import MyImage from '../Image/profile.png';
import Nav from '../NavbarFolders/Navbar';
import '../Css/EditProfile.css';

function EditProfile(){
    return(
        <div className=''>
            <Nav/>
            <div className='justify-content-center align-items-center'>
                <div>
                    <h1>Edit Profile</h1> 
                    <img src={MyImage} alt='My Profile'  className='' />
                </div>
                
            <h4>Change avatar</h4>
            <p>
                Name: {'\n'}<br/>
                <span className='MyName'>Shreeya Maharjan</span> <br/>
                Address: {'\n'}<br/>
                <span className='MyName'>Dallu, Kathmandu</span> {'\n'}<br/>
                Contact : {'\n'}<br/>
                <input type="text" id="inputField" placeholder='9880302189'  className='login-field'/>{'\n'}<br/>
                Payment Method: {'\n'} <br/>
                <select>
                    <option value="Esewa">E-sewa</option>
                    <option value="Khalti">Khalti</option>
                </select>{'\n'}<br/>
                <button className='btn btn-primary'>Save Changes</button>
            </p>
            </div>
            
            
        </div>
    )
}
export default EditProfile;