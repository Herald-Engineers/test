import '../Css/Table.css';
import {Link} from  'react-router-dom';
import '../Admin/MeterReader.css';

function Table(){
    return(
        <div className="">
            <table className="table table-striped meterReader-table12 outer-border" id="customers" style={{width:'100%'}}>
               
              
                <thead className=''>
                
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Transaction No</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody className='MyBody'>
                    <tr>
                        <td>2/02/2022</td>
                        <td>99235</td>
                        <td>Rs. 2044</td>
                        <td style={{color:'red'}}>Overdue</td>
                        <td><Link><p className='viewButton'>View Details</p></Link> <p className='viewButton'>Download</p></td>
                        
                       
                    </tr>
                    <tr>
                        <td>2/02/2022</td>
                        <td>99235</td>
                        <td>Rs. 2044</td>
                        <td style={{color:'red'}}>Overdue</td>
                        <td><Link><p className='viewButton'>View Details</p></Link> <p className='viewButton'>Download</p></td>
                        
                       
                    </tr>
                    <tr>
                        <td>2/02/2022</td>
                        <td>99235</td>
                        <td>Rs. 2044</td>
                        <td style={{color:'red'}}>Overdue</td>
                        <td><Link><p className='viewButton'>View Details</p></Link> <p className='viewButton'>Download</p></td>
                        
                       
                    </tr>
                    <tr>
                        <td>2/02/2022</td>
                        <td>99235</td>
                        <td>Rs. 2044</td>
                        <td style={{color:'red'}}>Overdue</td>
                        <td><Link><p className='viewButton'>View Details</p></Link> <p className='viewButton'>Download</p></td>
                        
                       
                    </tr>
                    <tr>
                        <td>2/02/2022</td>
                        <td>99235</td>
                        <td>Rs. 2044</td>
                        <td style={{color:'red'}}>Overdue</td>
                        <td><Link><p className='viewButton'>View Details</p></Link> <p className='viewButton'>Download</p></td>
                        
                       
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Table;