import React, { useState } from 'react';
import '../Admin/MeterReader.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoadingSpinner from '../Components/LoadingSpinner';
import MeterSidebar from '../MeterReaderPage/MeterSidebar';
import {useEffect} from 'react';

import Nav from '../NavbarFolders/Navbar';
function DataEntry(){
    const token = localStorage.getItem('token');
    const [tableData, setTableData] = useState([]);
    const [consumers, setconsumer] = useState(null);
    const [previousReading, setPreviousReading] = useState("");
    const [currentReading, setCurrentReading] = useState("");
    const [unitRate, setUnitRate] = useState(10); // assuming a default unit rate of 10
    const handlePreviousReading = (event) => {
        setPreviousReading(event.target.value);
    };
    const handleCurrentReading = (event) => {
        setCurrentReading(event.target.value);
    };
    const calculateAmount = () => {
    const unitsUsed = parseInt(currentReading) - parseInt(previousReading);
    const amount = unitsUsed * unitRate;
    return amount;
    };
    const amount = calculateAmount();
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("hello");
        const data = {
            previousReading: previousReading,
            currentReading: currentReading,
            unitRate: unitRate,
            amount: amount,
            readerId: event.target.assignedTo.value,

        };
        axios.post("https://wavebilling-backend-sabinlohani.onrender.com/admin/add-schedule", data , 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => {
          
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);

        });
      };

    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/admin/fetch-consumers", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => setTableData(response.data))
      .catch((error) => console.log(error));
      }, [consumers]);
    return(
        
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MeterSidebar/>
                </div>
            
            
                <div className='right-right-nav-Home3'>
                    <div className=''>
                        <Nav/>
                    </div>
                    
                    <div className='MyDash'>
                          
                    
                        <div className='myTables2'>
                        <div className=" ">
                            
                            <div className='d-flex justify-content-center headingBorder' style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                                <div>
                                    
                                   
                                </div>
                                <div>
                                     <h4 className='text-center'style={{color:'#2F4858',height:'37px',fontWeight:'600'}}>Data Entry Form</h4>
                                </div>
                            </div>
                            </div> 
                            <div className='myTables'>
                                <form >
                                    <p>Enter the id of the customer: </p>
                                    <select className='inputBox' name='assignedTo' required>
                                        <option>Enter the id of the customer</option>
                                        {tableData.map((row) => (
                                            <option key={row._id} value={row._id}>
                                            {row.readerId}
                                            </option>
                                        ))}
                                    </select>
                                    <input type="text" name="id" placeholder='Customer id' required/>
                                    <p>Previous Reading: </p>
                                    <input type="text" name="previous" placeholder='Previous reading' onChange={handlePreviousReading} required/>
                                    <p>Current Reading: </p>
                                    <input type="text" name="current" placeholder='Current reading' onChange={handleCurrentReading} required/>
                                    <p>Units Consumed: </p>
                                    <input type="text" name="units" placeholder='Units consumed' value="10"/>
                                    <input type="text" name="units" placeholder='Units consumed' value="m"/>
                                    <p>Amount: </p>
                                    <input type="text" name="amount" placeholder='Amount' value={amount}/>
                                    <input type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DataEntry;