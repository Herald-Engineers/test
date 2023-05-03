import React , { useState,useEffect }from 'react';
import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import {Link} from  'react-router-dom'; 
import axios from 'axios';
function ConfirmPay(){
    const token = localStorage.getItem('token');
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/my-bills", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {console.log(response.data);setTableData(response.data)})
        .catch((error) => console.log(error.response.data));
      }, []);

      const handleSubmit = (event) => {
        event.preventDefault();
       
        console.log("hello");
    
         // Send a POST request to the server with the entered username and password
        axios.post("https://wavebilling-backend-sabinlohani.onrender.com/pay-bill", {
        //   paymentMode: paymentMode,
        //   advancePayment: advancePayment
        })
        .then(res => {
          
          
           // Depending on the user role, navigate to a different page
         
          console.log(res.data);
          
        })
        .catch(error => {
        
          console.log(error);
          
        });
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
                                    {tableData.map((row) => (
                                        <input value={row.totalAmount} style={{width:'220.800px',height:'24px',padding:'20px 20px',margin:'8px 20px 8px 0px',borderRadius:'4px'}}/>))}
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
                                    <button className='btn btn-primary nextButton' type='submit' >Pay</button>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ConfirmPay;