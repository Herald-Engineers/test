import '../Css/Table.css';
import {Link} from  'react-router-dom';

function Table(){
    return(
        <div className="table">
            <table className="" id="customers">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">Bill No</th>
                        <th scope="col">Payment Date</th>
                        <th scope="col"> Total Charge</th>
                    
                    
                        <th scope="col">Status</th>
                        <th scope='col'>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="">1</th>
                        <td>12/12/2020</td>
                        <td>Rs. 2000</td>
                        <td>Unpaid</td>
                        <td><Link><button className='viewButton'>View</button></Link></td>
                       
                    </tr>
                    <tr>
                        <th scope="">2</th>
                        <td>12/12/2020</td>
                        <td>Rs. 2588</td>
                        <td>Unpaid</td>
                        <td><Link><button  className='viewButton'>View</button></Link></td>
                        
                        
                    </tr>
                    <tr>
                        <th scope="">3</th>
                        <td>12/12/2020</td>
                        <td>Rs. 1580</td>
                        <td>Paid</td>
                        <td><Link><button  className='viewButton'>View</button></Link></td> 
                    </tr>
                    <tr>
                        <th scope="">4</th>
                        <td>12/12/2020</td>
                        <td>Rs. 1620</td>
                        <td>Unpaid</td>
                        <td><Link><button  className='viewButton'>View</button></Link></td> 
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Table;