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
    const [readerId, setReaderId] = useState("");
    const [contactNum, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [tableData, setTableData] = useState([]);

    const handleFullName = (event) => {
        setFullname(event.target.value);
    };
    const handleReaderId = (event) => {
      setReaderId(event.target.value);
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
      axios.patch('https://wavebilling-backend-sabinlohani.onrender.com/admin/edit-reader', {
        fullName: fullName,
        readerId: readerId,
        contactNum: contactNum,
        email: email,
        _id: rowData._id,
        token: token,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => { 
        console.log("successful");  
        console.log(response);
        setServerResponseReceived(true);
        setLoading(false);
        setFullname("");
        setContact("");
        setEmail(""); 
      }).catch(error => console.log(error));
    };


    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        
      <Modal.Body style={{padding:'68px',backgroundColor:'#D9D9D9'}}>
            <center>
       
                <span style={{color: '#32325D',fontSize:'30px',fontWeight:'700'}}>Edit Your Account</span></center>
            <div className='main-box text-center'>
            
                <p>
                Please enter the Reader ID and temporary password for  the Reader.
                </p><br/>
              <form onSubmit={handleSubmit}>
                <table>
                  <tbody>
                    <tr>
                      <td>Full Name: </td>
                      <td><input type="text" name="fullName" placeholder="Enter full name"  value={fullName} onChange={handleFullName}/></td>
                    </tr>
                    <tr>
                      <td>Reader Id: </td>
                      <td><input type="text" name="readerId" placeholder="Enter Reader Id"  value={readerId} onChange={handleReaderId}/></td>
                    </tr>
                    <tr>
                      <td>Contact No:</td>
                      <td><input type="telephone" name="contactNum" placeholder="Enter Contact No"  value={contactNum} onChange={handleContactNum} /></td>
                    </tr>
                    <tr>
                      <td>Email Address: </td>
                      <td><input type="text" name="email" placeholder="Enter Email"  value={email} onChange={handleEmail}/></td>
                    </tr>

                  </tbody>
                </table>
                
                <Button onClick={props.onHide} className='meterButtons'>Go Back</Button>
                <input onClick={props.onHide} className='meterButtons2' type='submit' value="submit"  />
                {/* onClick={() => handleEdit(row._id)} */}{loading && !serverResponseReceived && <LoadingSpinner />}
              </form>
                
            </div>
        </Modal.Body>
       
      </Modal>
    
    );
}


function DynamicTable(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    
    setShow(true);
    console.log("Id: ",id); // prints row._id
  };
  
  const token = localStorage.getItem('token');
  const [fullName, setFullname] = useState("");
  const [readerId, setReaderId] = useState("");
  const [contactNum, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleFullName = (event) => {
      setFullname(event.target.value);
  };
  const handleReaderId = (event) => {
    setReaderId(event.target.value);
  };
  const handleContactNum = (event) => {
    setContact(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const [serverResponseReceived, setServerResponseReceived] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios.patch('https://wavebilling-backend-sabinlohani.onrender.com/admin/edit-reader', {
    fullName: fullName,
    readerId: readerId,
    contactNum: contactNum,
    email: email,
    _id: "64251495566a0d87b8ed3fef",
   
    }, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => { 
      console.log("successful");  
      console.log(response);
      setServerResponseReceived(true);
      setLoading(false);
      setFullname("");
      setReaderId("");
      setContact("");
      setEmail(""); 
    }).catch(error => console.log(error));
  };
  const [modalShow, setModalShow] = React.useState(false);
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

  // Find the edited row using _id
  const editedRow = tableData.find((row) => row._id === _id);

  // Set the showModal state to true to show the edit modal
  setModalShow(true);

  // // Pass the _id value as a prop to the VerticallyCentered component
  // setModalContent(
  //   <VerticallyCentered
  //     title="Edit Item"
  //     _id={_id}
  //     onSubmit={handleEditSubmit}
  //     onCancel={() => setModalShow(false)}
  //     editedRow={editedRow}
  //   />
  // );
};

const handleEditSubmit = (editedRow) => {
  // Update the tableData state with the updated data
  const updatedData = tableData.map((row) =>
    row._id === editedRow._id ? editedRow : row
  );
  setTableData(updatedData);

  // Hide the edit modal after updating data
  setModalShow(false);
};
    


  return (
    <>
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
          <form onSubmit={handleSubmit}>
            <img src={Edit} alt="Edit Meter Reader" className="" onClick={() => handleShow(row._id)}/>
            <img src={Delete} alt="Delete Meter Reader" className="" onClick={() => handleDelete(row._id)}/>
          </form> 
            {/* <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={modalId}
                rowData={tableData.find(row => row._id === modalId)}
              /> */}
              {/* <MyVerticallyCenteredModal
                show={modalShow}  onHide={() => setModalShow(false)}/>
           */}
            {/* onClick={openEditWindow(row._id)} */}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  
  
  <Modal  show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        
        <Modal.Body style={{padding:'68px',backgroundColor:'#D9D9D9'}}>
              <center>
         
                  <span style={{color: '#32325D',fontSize:'30px',fontWeight:'700'}}>Edit Your Account</span></center>
              <div className='main-box  meter-Table2'>
              
                  <p>
                  Please enter the Reader ID and temporary password for  the Reader.
                  </p><br/>
                <form  onSubmit={(event) => handleSubmit( event)}>
                  <table>
                    <tbody>
                      <tr>
                        <td>Full Name: </td>
                        <td><input type="text" name="fullName" placeholder="Enter full name"  value={fullName} onChange={handleFullName}/></td>
                      </tr>
                      <tr>
                        <td>Reader Id: </td>
                        <td><input type="text" name="readerId" placeholder="Enter Reader Id"  value={readerId} onChange={handleReaderId}/></td>
                      </tr>
                      <tr>
                        <td>Contact No:</td>
                        <td><input type="text" name="contactNum" placeholder="Enter Contact No"  value={contactNum} onChange={handleContactNum} /></td>
                      </tr>
                      <tr>
                        <td>Email Address: </td>
                        <td><input type="text" name="email" placeholder="Enter Email"  value={email} onChange={handleEmail}/></td>
                      </tr>
  
                    </tbody>
                  </table>
                  
                  <Button className='meterButtons'>Go Back</Button>
                  <Button className='meterButtons2' type='submit' value="submit"  >Submit</Button>
                  {/* onClick={() => handleEdit(row._id)} */}{loading && !serverResponseReceived && <LoadingSpinner />}
                </form>
                  
              </div>
          </Modal.Body>
         
        </Modal>
        </>
  );
}
export default DynamicTable;