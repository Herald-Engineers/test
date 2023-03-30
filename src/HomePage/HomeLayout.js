import React from 'react';
import MyNav from '../NavbarFolders/Navbar';
import MyImage2 from '../Image/logo123.png';
import MyImage3 from '../Image/iconuser.png';
import MyImage4 from '../Image/logout1.png';
import MyImage5 from '../Image/iconuniqueid.png';
import Money from '../Image/Money.png';
import Due from '../Image/due.png';
import Advance from '../Image/advance.png';
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
import Guide from '../Components/HowToGuide';
import {MdVerified} from "react-icons/md";

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
        {...props}
       size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered  
      >
        
    <Modal.Body style={{padding:'68px',backgroundColor:'#D9D9D9'}}>
            <center>
        <MdVerified size={40} style={{color: 'green'}}/><br/>
                <span style={{color: '#32325D',fontSize:'30px',fontWeight:'700'}}>Your account has been<br/> created successfully</span></center>
            <div className='main-box text-center'>
            
                <p>
                    It's our great pleasure to welcome you to the WaveBilling and we are<br/> pleased to inform you that your official user ID  has been created.
                </p><br/>
                <p>
                    <b>User Id:</b> np03cs4s<br/>
                    <b>Password:</b> sugam123
                </p>
                <p>You are requested to login using this official User ID and change the<br/> password as soon as you login into your account for future confidentiality. </p>
                <Button onClick={props.onHide} className='i-understand'>I understand</Button>
            </div>
        </Modal.Body>
       
      </Modal>
    //   <Modal
    //     {...props}
    //    size="lg"
    //     aria-labelledby="contained-modal-title-vcenter"
    //     centered
    //   >
    //     <Modal.Header closeButton>
    //       <Modal.Title id="contained-modal-title-vcenter">
    //         Khanepani options
    //       </Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <p>PLease choose an option</p>
    //       <Link to='/kukl'><img src={MyImage6} alt="Kathmandu Upatyaka Khanepani Limited" className="Kukl-image" /> </Link>
    //       <Link to='/'><img src={MyImage7} alt="Kathmandu Upatyaka Khanepani Limited" className="Community-image" /> </Link>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button onClick={props.onHide}>Close</Button>
    //     </Modal.Footer>
    //   </Modal>
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
                

            </div>
            
            <div className='right-right-nav-Home'>
                <div >
                    <MyNav />
                </div>
            
                <div className='right'>
                    <h3 className='text-center' style={{color:'#2F4858',marginTop:'10px',marginBottom:'20px'}}>Dashboard</h3>
                    <div className='d-flex'>
                        <div className='FirstBox'>
                            <div className=''>
                                <div style={{float:'left'}}>
                                    <img src={Money} alt="logout" className="" />
                                </div>
                                <div style={{float:'right',marginTop: '9px',paddingRight: '25px'}}>
                                    <span style={{fontSize:'18px',fontWeight:'700',marginTop:'10px'}}>Total Payments</span><br/>
                                    <span style={{fontSize:'14px',fontWeight:'500',color:'black'}}>Rs. 2996</span>
                                </div>
                                
                                                                
                            </div>
                                
                        </div>
                        <div className='FirstBox'>
                            
                            <div className=''>
                                <div style={{float:'left'}}>
                                    <img src={Due} alt="logout" className="" style={{paddingTop: '7px'}} />
                                </div>
                                <div style={{float:'right',marginTop: '9px',paddingRight: '45px'}}>
                                        <span style={{fontSize:'18px',fontWeight:'700',marginTop:'10px'}}>Due Payments</span><br/>
                                        <span style={{fontSize:'14px',fontWeight:'500',color:'black'}}>0</span>
                                </div>
                                    
                                                                    
                            </div>
                        </div>
                        <div className='FirstBox'>
                            <div className=''>
                                    <div style={{float:'left'}}>
                                            <img src={Advance} alt="logout" className="" style={{paddingTop: '7px'}}/>
                                    </div>
                                    <div style={{float:'right',marginTop: '9px',paddingRight: '14px'}}>
                                            <span style={{fontSize:'18px',fontWeight:'700',marginTop:'10px'}}>Advance Payments</span><br/>
                                            <span style={{fontSize:'14px',fontWeight:'500',color:'black'}}>3</span>
                                    </div>
                                    
                                                                    
                            </div>
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
                       
                            <p style={{color: '#8C8E8D'}}>How-to-Guides</p>
                            <div className='backgroundSpace'>
                                 <Guide />
                            </div>
                            
                            {/* <div className='top-part'>
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
                                
                            </div> top part */}


                            {/* button part */}
                            {/* <div></div> */}
                            {/* <Button variant="primary" onClick={() => setModalShow(true)} className='CheckoutButton'>
                                    Checkout
                                </Button>                        */}
                            
                            
                            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
         
    );
}
export default HomeLayout;