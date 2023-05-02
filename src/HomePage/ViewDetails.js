import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import {Link} from  'react-router-dom';
function ViewDetails(){
    return(
        <div className='containerHome'>
            <div className='left-left-nav'>
                <Sidebars/>
            </div>
            <div className='right-right-nav-Home'>

            
                <div className=''>
                    <Nav/>
                </div>
                
                <div className='' id='bill-history-section'>
                    <p>My Bill History</p>
                    <div>
                       <table>
                            <tr>
                                <th>Date:</th>
                                <td>2023/03/23</td>
                            </tr>
                            <tr>
                                <th>Customer Id:</th>
                                <td>2023/03/23</td>
                            </tr>
                            <tr>
                                <th>Customer Name:</th>
                                <td>Name</td>
                            </tr>
                            
                            <tr>
                                <th>Water Charges:</th>
                                <td>Name</td>
                            </tr>
                            <tr>
                                <th>Sewage charges:</th>
                                <td>Name</td>
                            </tr>
                            <tr>
                                <th>Meter Reader Rent:</th>
                                <td>200</td>
                            </tr>
                            <tr>
                                <th>Miscellanous:</th>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th>Penalty:</th>
                                <td>Name</td>
                            </tr>
                            <tr>
                                <th>Tax Amount:</th>
                                <td>Name</td>
                            </tr>
                            <tr>
                                <th>Bill Amount:</th>
                                <td>Name</td>
                            </tr>
                            <tr>
                                <th>Total To Be Paid:</th>
                                <td>Name</td>
                            </tr>
                       </table>
                       <Link to="/payNow"><button className='btn btn-primary'>Pay Now</button></Link>
                    </div>
                    
                </div>
                
            </div>
    </div>
    )
}
export default ViewDetails;