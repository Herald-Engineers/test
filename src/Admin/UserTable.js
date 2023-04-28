import React, { useState,useEffect } from 'react';
import '../Admin/MeterReader.css';
import {BiAddToQueue} from "react-icons/bi";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoadingSpinner from '../Components/LoadingSpinner';
import AdminSidebar from '../Admin/AdminSidebar';
import MainBox from '../Admin/MainBoxes';
import MeterTable from '../Admin/MeterTable';
function UserTable(){
    const token = localStorage.getItem('token');
    const [tableData, setTableData] = useState([]);
    const [reader, setReader] = useState(null);
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/admin/fetch-consumers   ", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        setTableData(response.data);
      })
      .catch((error) => console.log(error));
      }, [reader]);
    return(
        
            <div>
                <div className='containerHome'>
                    <div className='left-left-nav'>
                        <AdminSidebar/>
                    </div>
                
                
                    <div className='right-right-nav-Home2'>
                        <div>
                            <MainBox />
                        </div>
                        <div className="d-flex">
                                                  
                            <div className='myTables'style={{ width: '1200px', overflowX: 'scroll' }}>

                        <div style={{ width: '2000px', overflowX: 'scroll' }}>
                            <table>
                                <thead>
                                <tr>
                                    <th style={{ width: '300px' }}>Name</th>
                                    <th style={{ width: '300px' }}>User Id</th>
                                    <th style={{ width: '300px' }}>Meter No</th>
                                    <th style={{ width: '300px' }}>Contact No</th>
                                    <th style={{ width: '300px' }}>Email</th>
                                    <th style={{ width: '300px' }}>Address</th>
                                    <th style={{ width: '300px' }}>Payment Status</th>
                                    <th style={{ width: '100px' }}>Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row) => (
                                        <tr key={row._id}>
                                            <td>{row.fullName}</td>
                                            <td>-</td>
                                            <td>{row.address2}</td>
                                            <td>{row.contactNum}</td>
                                            <td>{row.email}</td>
                                            <td>{row.address}</td>
                                            <td>{row.paymentStatus}</td>
                                            <td>image</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                         </div>
                        </div>
                        
                        
                    </div>
                </div>
                
    
            </div>
        );
    
}
export default UserTable;