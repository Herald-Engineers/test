import Navsss from './NavbarFolders/Navbar';
import MyImage2 from './Image/logo123.png';
import MyImage3 from './Image/iconuser.png';
import MyImage4 from './Image/logout1.png';
import MyImage5 from './Image/iconuniqueid.png';
import  './Components/SmallLogo.css';
import { useLocation } from 'react-router-dom';
function MyBills(){
    const location = useLocation();
    const { inputValue } = location.state || {};
    return(
       
  
        <div className="mybills">
            
           
            <div className='containerHome'>
            <div className='left-left-nav'>
                
                <img src={MyImage2} alt="Wave Billing System" className="my-specific-image" /> 
                <div className='left-down-all'>
                    <img src={MyImage3} alt="user" className="my-specific-image2" />
                    {/* <p className='margin-username'>{inputValue}</p> */}
                    <p className='margin-username'>James Bond</p>
                    <br></br>

                    <img src={MyImage5} alt="user5" className="my-specific-image2" />
                    {/* <p className='margin-username'>{inputValue}</p> */}
                    <p className='margin-username'>npcs4s220117</p>

                    {/* <p>dbtc1989</p> */}
                    <img src={MyImage4} alt="logout" className="my-specific-image3" />
               </div>
                
                
            </div>
            <div className='right-right-nav'>
                <div >
                    <Navsss />
                </div>
            
                <div className='right'>
                   

                </div>
            </div>
            
        </div>
        </div>
    );
}
export default MyBills;