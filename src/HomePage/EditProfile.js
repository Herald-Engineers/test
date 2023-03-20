import MyImage from './Images/profile.png';
import Nav from '../NavbarFolders/Navbar';
function EditProfile(){
    return(
        <div>
            <Nav/>
            <h1>Edit Profile</h1>
            <img src={MyImage} alt='My Profile'  className='' />
            <h1></h1>
        </div>
    )
}
export default EditProfile;