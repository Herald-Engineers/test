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
import { Link } from 'react-router-dom';
import Edit from '../Image/edit.png';
import Delete from '../Image/delete.png';
function handleApprove(approveId,consumerType) {
    const token = localStorage.getItem('token');
    console.log(consumerType);  
    console.log(approveId);  
    axios.post("https://wavebilling-backend-sabinlohani.onrender.com/admin/approve-user",{
        _id: approveId,
        consumerType: consumerType,
    },{
        headers: {
          Authorization: `Bearer ${token}`
        },
      
      data: {
          approveId,
          consumerType
      }
    }).then(response => { 
        console.log("successful");  
        console.log(response);
      }).catch(error => console.log(error));
};
function UserTable(){
    const token = localStorage.getItem('token');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [reader, setReader] = useState(null);
    const [serverResponseReceived, setServerResponseReceived] = useState(false);
    const [loading, setLoading] = useState(false);  
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/admin/fetch-consumers", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        setTableData(response.data);
      })
      .catch((error) => console.log(error));
      }, [reader]
    );
    const [approveId, setApproveId] = useState(null);
    const [consumerType, setConsumerType] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const handleDelete = (_id) => {
        setLoading(true);
        setServerResponseReceived(false);
        console.log('The id is ' + _id);
        axios.delete(`https://wavebilling-backend-sabinlohani.onrender.com/admin/delete-reader`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            _id

        }
        })
        .then((response) => {
            // remove deleted row from tableData
            setServerResponseReceived(true);
            setLoading(false);
            setTableData(tableData.filter(row => row._id !== _id));
            console.log(`Deleted row with ID ${_id}`);
            handleClose();
        })
        .catch((error) => {
            console.log(error);
            setServerResponseReceived(true);
            setLoading(false);
        });
        };
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
                                    <th style={{ width: '300px' }}>Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row) => (
                                        <tr key={row._id}>
                                            <td>{row.fullName}</td>
                                            <td>{row.userId?row.userId:'-'}</td>
                                            <td>{row.meterNo?row.meterNo:'-'}</td>
                                            <td>{row.contactNum}</td>
                                            <td>{row.email}</td>
                                            <td>{row.address}</td>
                                            <td>{row.paymentStatus}</td>
                                            <td>{row.meterNo ? <p><img src={Edit} alt="Edit Consumer"/> <img src={Delete} alt="Delete Consumer"/></p>: <p><span onClick={() => {setApproveId(row._id); setConsumerType(row.consumerType);
                                                setShow2(true);
                                            }} style={{color:'#2F4858',marginRight:'20px'}}>Approve</span> <span  style={{color:'#9F4040', borderBottom:'1px solid #9F4040'}} onClick={() => {
                                                setDeleteId(row._id);
                                                setShow(true);
                                            }}>Delete</span></p>}</td> 
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                         </div>
                        </div>
                        
                        
                    </div>
                </div>
                <Modal  show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='DeletePopOver'>
                    <Modal.Body style={{padding:'68px',backgroundColor:'#D9D9D9'}}>
                        <center><span style={{color: '#32325D',fontSize:'30px',fontWeight:'700'}}> Are you sure?</span></center>
                        <div className='justify-content-center main-box2  '>
                            <Button className='meterButtons2' type='submit' value="submit" onClick={() => handleDelete(deleteId)} >Delete</Button><br/><br/>
                            <Button onClick={handleClose} className='meterButtons'>Go Back</Button><br/>
                            {loading && !serverResponseReceived && <LoadingSpinner />}
                        </div>
                    </Modal.Body>
                </Modal>
                <Modal  show={show2} onHide={handleClose2} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='DeletePopOver'>
                    <Modal.Body style={{padding:'68px',backgroundColor:'#D9D9D9'}}>
                        <center><span style={{color: '#32325D',fontSize:'30px',fontWeight:'700'}}> Are you sure?</span></center>
                        <div className='justify-content-center main-box2  '>
                            <Button className='meterButtons2' type='submit' value="submit" onClick={() => handleApprove(approveId,consumerType)} >Approve</Button><br/><br/>
                            <Button onClick={handleClose2} className='meterButtons'>Go Back</Button><br/>
                            {loading && !serverResponseReceived && <LoadingSpinner />}
                        </div>
                    </Modal.Body>
                </Modal>
                
    
            </div>
        );
    
}
export default UserTable;
