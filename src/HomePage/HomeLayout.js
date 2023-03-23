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
            
            <div className='right-right-nav-Home'>
                <div >
                    <MyNav />
                </div>
            
                <div className='right'>
                    <div className='d-flex'>
                         
                   
                        <div className='leftSection'>
                            <p>My Report</p>
                            <div className='graph'>
                                 <MyGraph />
                            </div>
                           
                        </div>
                        <div className='RightSection'>
                            <div className='top-part'>
                                <div>
                                    <h1 className='text-center bills'>Bill</h1>
                                </div>
                                <p className='paragraph'>Bill no: 543</p>
                                <div className='paragraph-bills'>
                                    <p>
                                        
                                        Water Charge: Rs. 1896<br/>
                                        Sewage Charge: Rs. 170<br/>
                                        Tax and VAT: Rs.190<br/>
                                        Reader Charge: Rs. 100<br/>


                                    </p>
                                </div>
                                <div style={{padding: '30px'}}>
                                    <p className='align-right'>
                                    Total</p><hr id="hr-width"/>
                                    
                                    <p className='align-right'>
                                        Rs. 2996
                                    </p>

                                </div>                                  
                                
                            </div> {/*top part*/}


                            {/* button part */}
                            <div>
                                <button className='btn btn-primary button-width'>Checkout</button>
                            </div>
                        </div>
                    </div>
                  
                    
                    
                    

                </div>
            </div>
            
        </div>
    );
}
export default HomeLayout;