import React from 'react';
import MyNav from '../NavbarFolders/Navbar';
import MyImage2 from '../Image/logo123.png';
import MyImage3 from '../Image/iconuser.png';
import MyImage4 from '../Image/logout1.png';
import MyImage5 from '../Image/iconuniqueid.png';
import MyImage6 from '../Image/KUKL.png';
import MyImage7 from '../Image/Community.png';
import  '../Components/SmallLogo.css';
import { useLocation } from 'react-router-dom';
import  '../HomePage/Homepage.css';
import MyGraph from '../HomePage/Chart';
import Sidebar from '../HomePage/Sidebar';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
       size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Khanepani options
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>PLease choose an option</p>
          <Link to='/kukl'><img src={MyImage6} alt="Kathmandu Upatyaka Khanepani Limited" className="Kukl-image" /> </Link>
          <Link to='/'><img src={MyImage7} alt="Kathmandu Upatyaka Khanepani Limited" className="Community-image" /> </Link>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}
function HomeLayout(){
    const location = useLocation();
    const { inputValue } = location.state || {};
    const [modalShow, setModalShow] = React.useState(false);
  
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
                                
                                <p style={{fontSize:'14px',fontWeight:'700',color:'#0A83F0'}}>Total Payments</p>
                                <p style={{fontSize:'22px',fontWeight:'700'}}>Rs. 2996</p>
                        </div>
                        <div className='FirstBox'>
                                
                                <p  style={{fontSize:'14px',fontWeight:'700',color:'#0A83F0'}}>Late Payments</p>
                                <p style={{fontSize:'22px',fontWeight:'700'}} className=''>2</p>
                        </div>
                        <div className='FirstBox'>
                                
                                <p style={{fontSize:'14px',fontWeight:'700',color:'#0A83F0'}}>Advance Payments</p>
                                <p  style={{fontSize:'22px',fontWeight:'700'}} className=''>5</p>
                        </div>
                    </div>
                    
                    <div className='d-flex'>
                         
                   
                        <div className='leftSection'>
                            <p style={{color: '#8C8E8D'}}>My Report</p>
                            <div className='graph'>
                                 <MyGraph />
                            </div>
                           
                        </div>
                        <div className='RightSection'>
                            <p style={{color: '#8C8E8D'}}>My Current Bill</p>
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
                            <Button variant="primary" onClick={() => setModalShow(true)} className='CheckoutButton'>
                                    Checkout
                                </Button>                       
                            </div>
                            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
         
    );
}
export default HomeLayout;