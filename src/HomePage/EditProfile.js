import MyImage from '../Image/profile.png';
import Nav from '../NavbarFolders/Navbar';
import '../Css/EditProfile.css';

function EditProfile(){
    const textcolor = {
        color: '#525252',
        
    };
    return(
        <div className='whole-sec'>
            <div className='Navbar'>
                <Nav/>
            </div>
            
            <div className='text-center' id='EditProfile'>

                <div>
                    <h2 style={textcolor}>Edit Your Profile</h2> 
                    <img src={MyImage} alt='My Profile' style={{  paddingBottom: '20px' }} />
                </div>
                
                <div>
                    <p><form>
                        <b style={textcolor}>Name: </b> {'\n'}<br/>
                        <input type="text" id="editFirstName" placeholder='First Name'  className='login-field' required/>{'\n'}<br/> 
                        <input type="text" id="editLastName" placeholder='Last Name'  className='login-field' required/>{'\n'}<br/> 
                        
                       
                            <div>
                               <b style={textcolor}>Contact :</b>  {'\n'}<br/>
                            <input type="text" id="editContact" placeholder='9880302189'  className='login-field'  style={{  marginBottom: '20px' }}/>{'\n'}
                            </div>
                            <div>
                                <b style={textcolor}>Payment Method: </b><br/> 
                                <select id='PaymentSelection'>
                                <option value="Esewa">E-sewa</option>
                                <option value="Khalti">Khalti</option>
                                </select>{'\n'}<br/>
                            </div>
                           
                        <button className='btn btn-primary'  style={{  marginTop: '20px' }}>Save Changes</button>

                    </form>
                    </p> <div className='text-center'>
                  <p className='sorry_small'>Sorry, You cannot change the  details mentioned below.<br/> If you need to change this changes, then please write an email to admin@gmail.com<br/>
                    <b>  Your Address: {'\n'}<span className='Myaddress'>Dallu, Kathmandu</span> {'\n'}<br/>
                    Unique Id: {'\n'}<span className='Myuniqueid'>NP03CS4S</span> </b><br/></p>

                </div>
                </div >       
               
            
            </div>
        </div>
    )
}
export default EditProfile;