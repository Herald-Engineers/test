import '../Css/Table.css';
import React, { useState,useEffect } from 'react';
import {Link} from  'react-router-dom';
import '../Admin/MeterReader.css';
import ReactDOMServer from 'react-dom/server';
import { Document, Page } from 'react-pdf';
import axios from 'axios';

function Table(){
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
    // const handleDownloadClick = () => {
    //     downloadFile();
    // }   
    
    // const downloadFile = ()=>{
    //     const content = createFileContent();
    //     const blob = new Blob([ReactDOMServer.renderToStaticMarkup(content)], { type: 'application/pdf' });
    //     const url = URL.createObjectURL(blob);
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = 'MyAmounts.pdf';
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    //     URL.revokeObjectURL(url);
    //   }
    
    
    return(
        <div className="">
            
            <div style={{ height: '500px', }}>
                            <table className="table table-striped meterReader-table outer-border"> 
                                <thead>
                                <tr>
                                    <th style={{ width: '300px' }}>Date</th>
                                    <th style={{ width: '300px' }}>Transaction No</th>
                                    <th style={{ width: '300px' }}>Amount</th>
                                    
                                    <th style={{ width: '300px' }}>Payment Status</th>
                                    <th style={{ width: '300px' }}>Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                    
                                    {tableData.map((row) => (
                                        <tr key={row._id}>
                                           
                                            <td>{row.billDate}</td>
                                            <td>{row.consumerId}</td>
                                            <td>{row.billAmount}</td>
                                           
                                            <td>{row.paid ? (row.paid === true ? 'Paid' : 'Pending') : 'Pending'}</td>
                                            <td><Link to="/viewDetails"><p className='viewButton'>View</p></Link >  <button >
                                            Download </button>    </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
        </div>
    );
}
export default Table;

