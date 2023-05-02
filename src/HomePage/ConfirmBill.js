import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import {Link} from  'react-router-dom'; 
import Khalti from '../Image/khalti.png';
import Esewa from '../Image/esewa.png';
function confirmPay(){
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
                        <div className='ConfirmBill'>
                            <center>
                                <h4>Confirm Payment?</h4>
                                <p>Are you sure want to confirm and pay for the bill?</p>
                                <table>
                                    <tr>
                                        <td>Bill Amount:</td>
                                       
                                    </tr>
                                    <tr>
                                        <input value={1234.0} style={{width:'220.800px',height:'24px',padding:'20px 20px',margin:'8px 20px 8px 0px',borderRadius:'4px'}}/>
                                    </tr>
                                    <tr>
                                        <td>Advance Payment (Optional):</td>
                                        
                                    </tr>
                                    <tr>
                                        <td><input type='number' defaultValue={0} /></td>
                                    </tr>
                                </table>
                                <div className='buttonAlign'> 
                                    <Link to="/payNow"><button className='btn btn-secondary'>Back</button></Link>
                                    <button className='btn btn-primary nextButton' >Pay</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default confirmPay;