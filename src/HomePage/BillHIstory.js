import History from '../Components/Table';
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
                
                <div className='' id='bill-history-section'>
                   
                    <div>
                        <History/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}
export default BillHistory;