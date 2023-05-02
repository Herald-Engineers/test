import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import {Link} from  'react-router-dom'; 
import Khalti from '../Image/khalti.png';
import Esewa from '../Image/esewa.png';
function handleNextClick() {
    // Get the selected payment method
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    // If no payment method is selected, show an error message and return
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
   
         // Otherwise, proceed to the next page
    window.location.href = "/confirmPayment";
    
    
   
  }
function PayNow(){
    
    return(
        <div className='containerHome'>
            <div className='left-left-nav'>
                <Sidebars/>
            </div>
            <div className='right-right-nav-Home'>
                <div className=''>
                    <Nav/>
                </div>
                
                <div className='' id='payNowPage'>
                    <center><h2 style={{color:'#2F4858',marginTop:'30px'}}>Pay for your bill</h2></center>
                    <div className='Pay-section'>
                        <div className='PaySectionPlease'>
                            <center>
                                <p>Choose Your payment option:</p>
                                <div className='d-flex '>
                                    <div className='pay-now-1'>
                                        <input class="form-check-input" type="radio" name="paymentMethod" value="khalti" id="flexCheckDefault" />
                                        <label for="flexCheckDefault">
                                            <img src={Khalti} alt="logout" className="logoImage" />
                                        </label>
                                    </div>
                                    <div className='pay-now-2'>
                                        <input class="form-check-input" type="radio" name="paymentMethod" value="esewa" id="flexCheckDefault"/>
                                        <label for="flexCheckDefault">
                                            <img src={Esewa} alt="logout" className="logoImage" />
                                        </label>
                                    </div>
                                </div>
                                <div className='buttonAlign'> 
                                    <Link to="/viewDetails"><button className='btn btn-secondary'>Back</button></Link>
                                    <button className='btn btn-primary nextButton' onClick={handleNextClick}>Next</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PayNow;