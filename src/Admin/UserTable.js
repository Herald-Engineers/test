import React, { useState } from 'react';
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
    const [tableData, setTableData] = useState([]);
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