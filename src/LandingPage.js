// import MyBanner from './Image/bannerNepal2.png';
import MyBanner from './Image/Banner123.jpg';
import LandingNav from './NavbarFolders/LandingNav';
import Logo from './Image/logo123.png';
import Icon1 from './Image/icon1.png';
import Icon2 from './Image/icon2.png';
import Icon3 from './Image/icon3.png';
import profile1 from './Image/Sugam.png';
import profile2 from './Image/Sube.png';
import profile3 from './Image/Shreya.png';
import profile4 from './Image/Sabin.png';
import Contact from './Components/ContactUs';

//import Icon4 from './Image/icon4.png';
import './Css/LandingPage.css';
import { Link } from 'react-router-dom';
function Landingpage(){
    return(
        <div className="landingpage">
            <div className='nav_section'>
                <LandingNav/>
            </div>
            
           
            <div className='banner-section' style={{ backgroundImage:`linear-gradient(#003366, #6699cc 90%), url(${MyBanner})` }}>
                <div className='paragraph_section' >
                    <h1 className='heading'>Wave <br></br>Billing</h1>
                    <b><h4 className='subheading'>Keep the flow, pay what you owe</h4></b>
                    <p className='paragraphcss'>
                        Say goodbye to paper invoices and manual data entry with our water billing system. Our platform automates the billing process, making it easy for you to manage your water bills from anywhere. Plus, our system provides you with valuable usage data insights to help you optimize your water consumption and save money. Sign up today and simplify your billing process while taking control of your water usage.
                        
                    <br></br>
                    </p>
                    <Link to="/signinas"><button className='button button1'> Get started</button></Link>
                    
                </div>
                <div className='image_section'>
                    <img src={MyBanner} alt="Nepal Water Stone" className="banner" />
                </div>
            </div>


            <section id="services"> 
                <div className='services-section'>
                    <h2 className='service_heading'> Our Services</h2>
                    <div className='whole section'>
                        <div className='d-flex justify-content-center '>
                            <div className='first_icon'> 
                                <img src={Icon1} alt="Nepal Water Stone" className="" />
                                <b> <p className='my-class'>Online Bill Payment</p></b>
                                <p className='my-class2'>Simplify your water bill payments with our secure and user-friendly online payment service.</p>
                            </div>
                            <div className='first_icon-1'> 
                                <img src={Icon2} alt="Nepal Water Stone" className="" />
                                <b><p className='my-class'>Bill History</p></b>
                                <p className='my-class2'>View your past water bills and payment history with our easy-to-use billing history feature.</p>
                            </div>
                        </div>
                        
                        <div className=' d-flex justify-content-center'>
                            <div className='first_icon'> 
                                <img src={Icon3} alt="Nepal Water Stone" className="" />
                                <b> <p className='my-class'>Statistics</p></b>
                                <p className='my-class2'>Simplify your water bill payments with our secure and user-friendly online payment service.</p>
                            </div>
                            <div className='first_icon-1'> 
                                <img src={Icon3} alt="Nepal Water Stone" className="" />
                                <b> <p className='my-class'>Statistics</p></b>
                                <p className='my-class2'>Simplify your water bill payments with our secure and user-friendly online payment service.</p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </section>    



            <section id="aboutus">
                <div className='aboutus-section'>
                    <p className='service_heading_small'>About Us</p>
                    <h2 className='service_heading'> Meet Our Team</h2>
                    <div className='d-flex justify-content-center'>
                        <div className='eachImages'>
                            <img src={profile1} alt="Project Manager" className="image_spacing" />
                            <p className='title'>Project Manager</p>
                            <p className='color_name'>Sugam Paudyal</p>
                        </div>
                        
                        <div className='eachImages'>
                            <img src={profile2} alt="Project Manager" className="image_spacing" />
                            <p className='title'>Product Owner </p>
                            <p className='color_name'>Subegya Sign Sipai </p>
                        </div>

                        <div className='eachImages'>
                            <img src={profile3} alt="Project Manager" className="image_spacing" />
                            <p className='title'> Frontend Developer</p>
                            <p className='color_name'>Shreya Maharjan </p>
                        </div>

                        <div className='eachImages'>
                            <img src={profile4} alt="Project Manager" className="image_spacing" />
                            <p className='title'> Backend Developer</p>
                            <p className='color_name'>Sabin Lohani</p>
                        </div>

                    </div>




                    
                    
                </div>
                
            </section>  



            <section id='ContactUs'  >
                <div className='contactus-section'>
                    <h2 className='service_heading text-center'>Contact Us</h2>
                    <div className='contact'>
                        <div className='address-section'>
                            
                            <p>
                                <h2>Wave Billing</h2><br></br>
                                <b>Address</b> <br></br>
                                Herald College Kathmandu<br></br>
                                Naxal, Kathmandu<br></br>
                                Street No: 5<br></br>
                                <br></br>
                                <b>Our Contact</b>
                                <br></br>
                                01-4444444<br></br>
                                wavebill@gmail.com<br></br>
                                P.O.Box: 17375<br></br>
                                Fax: 4117327 <br></br>
                                <br></br>
                                <b>Powered by: Herald Engineers</b>

                             </p>
                        </div> 

                        <Contact />
                    </div>
                </div>
            </section>    
            

            <div className='footer-section'>
                <div>
                    <p className='rights'>© 2021 Wave Billing. All Rights Reserved.</p><br></br>
                    <p>Designed and Developed by Herald Engineers</p>
                </div>
            </div>


        </div>
    )
}
export default Landingpage;