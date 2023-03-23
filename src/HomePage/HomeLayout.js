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
                        <div className='FirstBox'>
                                
                                <p>Total Payments</p>
                                <p className=''>Rs. 2996</p>
                        </div>
                        <div className='FirstBox'>
                                
                                <p>Late Payments</p>
                                <p className=''>2</p>
                        </div>
                        <div className='FirstBox'>
                                
                                <p>Advance Payments</p>
                                <p className=''>5</p>
                        </div>
                    </div>
                    
                    <div className='d-flex'>
                         
                   
                        <div className='leftSection'>
                            <p>My Report</p>
                            <div className='graph'>
                                 <MyGraph />
                            </div>
                           
                        </div>
                        <div className='RightSection'>
                            <p>My Current Bill</p>
                            <div className='top-part'>
                                <div>
                                    <h3 className='text-center bills'>Bill</h3>
                                </div>
                                
                                <div className='paragraph-bills'>
                                    <div>
                                        <table>
                                            <tr>
                                                <td className='space-between-element'>Bill no:</td>
                                                <td>543</td>
                                            </tr>
                                            <tr><td  className='space-between-element'>Water charges:</td>
                                                <td>Rs. 456</td> </tr>
                                            <tr><td  className='space-between-element'>Sewage charges:</td>
                                                <td>Rs. 46</td></tr>
                                            <tr><td  className='space-between-element'>Tax and VAT</td>
                                                <td>Rs. 50</td></tr>
                                            <tr><td  className='space-between-element'>
                                                Reader Charge</td>
                                                <td>Rs. 20</td></tr>
                                        </table>
                                    </div>
                                    <p>
                                        
                                        
                                    </p>
                                </div>
                                <div style={{paddingTop: '10px',paddingRight: '30px'}}>
                                    <p className='align-right'>
                                    Total</p>
                                    <hr id="hr-width"/>
                                    
                                    <p className='align-right totalamt'>
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