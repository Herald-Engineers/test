import '../Css/Table.css';
import {Link} from  'react-router-dom';
import '../Admin/MeterReader.css';
import ReactDOMServer from 'react-dom/server';
import { Document, Page } from 'react-pdf';

function Table(){
    const handleDownloadClick = () => {
        downloadFile();
    }   
    
    const downloadFile = ()=>{
        const content = createFileContent();
        const blob = new Blob([ReactDOMServer.renderToStaticMarkup(content)], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'MyAmounts.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    
    
      const createFileContent=() =>{
        return(
            <div className='' id='bill-history-section'>
            <p>My Bill History</p>
            <div>
               <table className='table table-striped meterReader-table outer-border'>
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
                        <th>Payment Mode:</th>
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
            </div>
            
        </div>
        );
    }
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
                        <td><Link to="/viewDetails"><p className='viewButton'>View</p></Link >  <button onClick={handleDownloadClick}>
      Download </button>    </td>
                        
                       
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

