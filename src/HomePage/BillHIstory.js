import MyImage from '../Image/profile.png';
import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import '../Css/EditProfile.css';

function BillHistory(){
    const textcolor = {
        color: '#525252',
        
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
            
            <div className='text-center' id='EditProfile'>

                
                </div>
            
            </div>
        </div>
    );
}
export default BillHistory;