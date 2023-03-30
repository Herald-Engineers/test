import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";
import TableData from "./TableData";
import LoadingSpinner from '../Components/LoadingSpinner';
import axios from 'axios';
import '../Admin/MeterReader.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Edit from '../Image/edit.png';
import Delete from '../Image/delete.png';

function MyVerticallyCenteredModal(props) {
    //  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJyYW1lc2giLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWQiOiI2NDFhZmQ1ODJiMzYxZDI3ODY2NzRmNjEiLCJpYXQiOjE2ODAwOTI2NjB9.1-rmZNz7uaa_AH6wil2n6L-eRCA5EvXKbhDn9XHYSJU';
    // Set the token in local storage
    const token = localStorage.getItem('token');
    // Get the token from local storage
    const { rowData } = props;
    const [fullName, setFullname] = useState("");
    
    const [password, setPassword] = useState("");
    const [contactNum, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [tableData, setTableData] = useState([]);

    const handleFullName = (event) => {
        setFullname(event.target.value);
    };
    const handleContactNum = (event) => {
      setContact(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
};

     // retrieve token from local storage or state
   
    
    const [serverResponseReceived, setServerResponseReceived] = useState(false);
    const [loading, setLoading] = useState(false);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        console.log("on process");
        axios.post('https://wavebilling-backend-sabinlohani.onrender.com/admin/add-reader',  {
            fullName:fullName,
          
            password:password,
            contactNum:contactNum,
            email:email,
            token:token,
            
        },
        {
            headers: {
              Authorization: `Bearer ${token}`, // Add token to headers
            },
          }
        )
        .then(response => { 
            console.log("successful");  
            console.log(response);
            
            setServerResponseReceived(true);
                   
            setLoading(false);
            
            })
            .catch(error => console.log(error));
        
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
       
                <span style={{color: '#32325D',fontSize:'30px',fontWeight:'700'}}>Edit Your Account</span></center>
            <div className='main-box text-center'>
            
                <p>
                Please enter the Reader ID and temporary password for  the Reader.
                </p><br/>
              <form onClick={handleSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <td>Full Name: </td>
                      <td><input type="text" name="fullName" placeholder="Enter full name"  value={fullName} onClick={handleFullName}/></td>
                    </tr>
                    <tr>
                      <td>Contact No:</td>
                      <td><input type="password" name="contactNum" placeholder="Enter Contact No"  value={contactNum} onClick={handleContactNum} /></td>
                    </tr>
                    <tr>
                      <td>Email Address: </td>
                      <td><input type="text" name="email" placeholder="Enter Email"  value={email} onClick={handleEmail}/></td>
                    </tr>

                  </tbody>
                </table>
                
                <Button onClick={props.onHide} className='meterButtons'>Go Back</Button>
                <input onClick={props.onHide} className='meterButtons2' type='submit' value="submit"  />
                {/* onClick={() => handleEdit(row._id)} */}
                </form>
                {loading && !serverResponseReceived && <LoadingSpinner />}
            </div>
        </Modal.Body>
       
      </Modal>
    
    );
}

// function openEditWindow(_id) {
//   setModalShow(true);
// }

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
  
    
  
    const handleDelete = (_id) => {
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
        setTableData(tableData.filter(row => row._id !== _id));
        console.log(`Deleted row with ID ${_id}`);
      })
      .catch((error) => console.log(error));
    };

    // const handleEdit = (_id) => {
    //     console.log('The row is: ' + row);
    //     const editedRow = tableData.find((row) => row._id === _id);
    //     const updatedData = [...tableData];
       
    //     // replace the existing row with the updated row
    //     const index = updatedData.findIndex((row) => row._id === _id);
    //     updatedData[index] = { ...editedRow, fullName: "Updated Name", email: "updated_email@gmail.com", contactNum: "9876543210" };
      
    //     // update the state with the updated data
    //     setTableData(updatedData);
      
    //     // send PUT request to update the row in the backend
    //     axios.put(`https://wavebilling-backend-sabinlohani.onrender.com/admin/update-reader/${id}`, editedRow, {
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     })
    //     .then((response) => console.log(response))
    //     .catch((error) => console.log(error));
    //   };
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
       
    //     console.log("on process");
    //     axios.post('https://wavebilling-backend-sabinlohani.onrender.com/admin/add-reader',  {
    //         fullName:fullName,
          
    //         password:password,
    //         contactNum:contactNum,
    //         email:email,
    //         token:token,
            
    //     },
    //     {
    //         headers: {
    //           Authorization: `Bearer ${token}`, // Add token to headers
    //         },
    //       }
    //     )
    //     .then(response => { 
    //         console.log("successful");  
    //         console.log(response);
            
            
            
    //         })
    //         .catch(error => console.log(error));
        
    // };
    const handleEdit = (_id) => {
      console.log('Editing row with id: ' + _id);
      const editedRow = tableData.find((row) => row._id === _id);
      // setModalId(_id);
      // setModalShow(true);
    
      // update the state with the updated data
      const updatedData = tableData.map(row => row._id === _id ? editedRow : row);
      setTableData(updatedData);
    
      // send PUT request to update the row in the backend
      axios.put(`https://wavebilling-backend-sabinlohani.onrender.com/admin/update-reader/${_id}`, editedRow, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    };
    


  return (
    <table className="table table-striped meterReader-table outer-border">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact Number</th>
       <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((row) => (
        <tr key={row._id}>
          <td>{row.fullName}</td>
          <td>{row.email}</td>
          <td>{row.contactNum}</td>
          <td>
            <img src={Edit} alt="Edit Meter Reader" className="" onClick={() => {
              handleEdit(row._id);
              setModalShow(true);
              // setModalId(row._id);
            }}/>
            <img src={Delete} alt="Delete Meter Reader" className="" onClick={() => handleDelete(row._id)}/>
           
            {/* <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={modalId}
                rowData={tableData.find(row => row._id === modalId)}
              /> */}
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
               
                
              />
          
            {/* onClick={openEditWindow(row._id)} */}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  

  );
}
export default DynamicTable;