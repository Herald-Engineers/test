import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";
import TableData from "./TableData";

import axios from 'axios';
import '../Admin/MeterReader.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    const [tableData, setTableData] = useState([]);
    const token = localStorage.getItem('token'); // retrieve token from local storage or state
    const { row } = props;
    const handleEdit = (id) => {
        
        const editedRow = tableData.find((row) => row._id === id);
        const updatedData = [...tableData];
       
        // replace the existing row with the updated row
        const index = updatedData.findIndex((row) => row._id === id);
        updatedData[index] = { ...editedRow, fullName: "Updated Name", email: "updated_email@gmail.com", contactNum: "9876543210" };
      
        // update the state with the updated data
        setTableData(updatedData);
      
        // send PUT request to update the row in the backend
        axios.put(`https://wavebilling-backend-sabinlohani.onrender.com/admin/update-reader/${id}`, editedRow, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
      };
      
    return (
        <Modal
        {...props}
       size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered  
      >
        
    <Modal.Body style={{padding:'68px',backgroundColor:'#D9D9D9'}}>
            <center>
       
                <span style={{color: '#32325D',fontSize:'30px',fontWeight:'700'}}>Your account has been<br/> created successfully</span></center>
            <div className='main-box text-center'>
            
                <p>
                    It's our great pleasure to welcome you to the WaveBilling and we are<br/> pleased to inform you that your official user ID  has been created.
                </p><br/>
                <p>
                    <b>User Id:</b> np03cs4s<br/>
                    <b>Password:</b> sugam123
                </p>
                <p>You are requested to login using this official User ID and change the<br/> password as soon as you login into your account for future confidentiality. </p>
                <Button className='i-understand'>I understand</Button>
                {/* onClick={() => handleEdit(row._id)} */}
            </div>
        </Modal.Body>
       
      </Modal>
    
    );
}
function DynamicTable(){
    const [modalShow, setModalShow] = React.useState(false);
    const [tableData, setTableData] = useState([]);
    const token = localStorage.getItem('token'); // retrieve token from local storage or state
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/admin/fetch-readers", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        .then((response) => setTableData(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    
  
    const handleDelete = (id) => {
      
      axios.delete(`https://wavebilling-backend-sabinlohani.onrender.com/admin/delete-reader/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        // remove deleted row from tableData
        setTableData(tableData.filter(row => row._id !== id));
        console.log(`Deleted row with ID ${id}`);
      })
      .catch((error) => console.log(error));
    };
  


  return (
    <table className="table table-striped meterReader-table outer-border">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact Number</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((row) => (
        <tr key={row._id}>
          <td>{row.fullName}</td>
          <td>{row.email}</td>
          <td>{row.contactNum}</td>
          <td>
            <button  onClick={() => setModalShow(true)} >Edit</button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
            {/* row={row} */}
          </td>
          <td>
            <button onClick={() => handleDelete(row._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  

  );
}
export default DynamicTable;