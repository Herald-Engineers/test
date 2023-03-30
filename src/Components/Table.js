import '../Css/Table.css';
import {Link} from  'react-router-dom';
import '../Admin/MeterReader.css';

function Table(){
    return(
        <div className="">
            <table className="table table-striped meterReader-table12 outer-border" id="customers">
                <thead className=''>
                    <tr>
                        <th scope="col">Bill No</th>
                        <th scope="col">Payment Date</th>
                        <th scope="col"> Total Charge</th>
                    
                    
                        <th scope="col">Status</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody className='MyBody'>
                    <tr>
                        <th scope="">1</th>
                        <td>12/12/2020</td>
                        <td>Rs. 2000</td>
                        <td style={{color:'red'}}>Overdue</td>
                        <td><Link><p className='viewButton'>View</p></Link> <p className='viewButton'>Download</p></td>
                        
                       
                    </tr>
                    <tr>
                        <th scope="">2</th>
                        <td>12/12/2020</td>
                        <td>Rs. 2588</td>
                        <td style={{color:'red'}}>Overdue</td>
                        <td><Link><button  className='viewButton'>View</button></Link></td>
                        
                        
                    </tr>
                    <tr>
                        <th scope="">3</th>
                        <td>12/12/2020</td>
                        <td>Rs. 1580</td>
                        <td style={{color:'green'}}>Paid</td>
                        <td><Link><button  className='viewButton'>View</button></Link></td> 
                    </tr>
                    <tr>
                        <th scope="">4</th>
                        <td>12/12/2020</td>
                        <td>Rs. 1620</td>
                        <td style={{color:'#C0BB43'}}>Pending</td>
                        <td><Link><button  className='viewButton'>View</button></Link></td> 
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Table;