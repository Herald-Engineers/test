import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import Contact from '../Components/ContactUs';
import '../Css/ContactUs.css';
import '../Css/EditProfile.css';
import '../HomePage/Homepage.css';

function ContactMe(){
    
    return(
        <div>
             <div className='containerHome'>
                <div className='left-left-nav'>
                    <Sidebars/>
                </div>

                <div className='right-right-nav-Home'>
                    <div className=''>
                        <Nav/>
                    </div>
            
                    <div className='' >
                        <Contact id="contact-section"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactMe;