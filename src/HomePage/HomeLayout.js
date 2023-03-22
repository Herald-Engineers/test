import MyNav from '../NavbarFolders/Navbar';
import MyImage2 from '../Image/logo123.png';
import MyImage3 from '../Image/iconuser.png';
import MyImage4 from '../Image/logout1.png';
import MyImage5 from '../Image/iconuniqueid.png';
import  '../Components/SmallLogo.css';
import { useLocation } from 'react-router-dom';
import  '../HomePage/Homepage.css';
import MyGraph from '../HomePage/Chart';
import Sidebar from '../HomePage/Sidebar';
function HomeLayout(){
    const location = useLocation();
    const { inputValue } = location.state || {};
    
  
    return (
        <div className='containerHome'>
            <div className='left-left-nav'>
                <Sidebar />
                {/* <img src={MyImage2} alt="Wave Billing System" className="my-specific-image" /> 
                <br></br><img src={MyImage3} alt="user" className="my-specific-image2" />
                <p className='margin-username'></p>
                <p>dbtc1989</p>
                <img src={MyImage4} alt="logout" className="my-specific-image3" /> */}

                {/* <img src={MyImage2} alt="Wave Billing System" className="my-specific-image" />  */}
                {/* <div className='left-down-all'> */}
                    {/* <img src={MyImage3} alt="user" className="my-specific-image2" /> */}
                    {/* <p className='margin-username'>{inputValue}</p> */}
                    {/* <p className='margin-username'>{inputValue}</p>
                    <br></br> */}

                    {/* <img src={MyImage5} alt="user5" className="my-specific-image2" /> */}
                    {/* <p className='margin-username'>{inputValue}</p> */}
                    {/* <p className='margin-username'>Dashboard</p> */}

                    {/* <p>dbtc1989</p> */}
                    {/* <img src={MyImage4} alt="logout" className="my-specific-image3" /> */}
                    
               {/* </div> */}

            </div>
            <div className='right-right-nav'>
                <div >
                    <MyNav />
                </div>
            
                <div className='right'>
                    <div className='buttons-spacing'>
                        <button className='btn btn-primary my-buttons'>Report and Analytics</button>
                        <button className='btn btn-primary my-buttons2'>Conversation Tips</button>
                        <button className='btn btn-primary my-buttons3'>Pay Now</button>
                    </div>
                    <div>
                        <MyGraph />
                    </div>
                    
                    
                    

                </div>
            </div>
            
        </div>
    );
}
export default HomeLayout;