import React, { useState } from 'react';
import '../Admin/MeterReader.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoadingSpinner from '../Components/LoadingSpinner';
import MeterSidebar from '../MeterReaderPage/MeterSidebar';
import {useEffect} from 'react';
import {TbFileText} from "react-icons/tb";

import Nav from '../NavbarFolders/Navbar';
function DataEntry(){
    const token = localStorage.getItem('token');
    const [tableData, setTableData] = useState([]);
    const [tableData2, setTableData2] = useState([]);
    const [selectedCustomerId, setSelectedCustomerId] = useState('');
    const [consumers, setconsumer] = useState(null);
    const [previousReading, setPreviousReading] = useState("");
    const [currentReading, setCurrentReading] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const [errorMessage3, setErrorMessage3] = useState('');
    const [unitRate, setUnitRate] = useState(10); // assuming a default unit rate of 10
    const handlePreviousReading = (event) => {
        const previous_reading =event.target.value;
        setPreviousReading(event.target.value);
        if (/^[0-9]*$/.test(previous_reading)) {
            setPreviousReading(previous_reading);
            setErrorMessage2('');
        }
        else{
            setPreviousReading('');
            setErrorMessage2('Please enter numbers only');
        }
    };
    const handleCurrentReading = (event) => {
        const current_reading =event.target.value;
        setCurrentReading(event.target.value);
        if (/^[0-9]*$/.test(current_reading)) {
            setCurrentReading(current_reading);
            setErrorMessage3('');
        }
        else{
            setCurrentReading('');
            setErrorMessage3('Please enter numbers only');
        }
    };
    const handleUnit = (event) => {
       
        const value = event.target.value;
        // Only allow digits
        if (/^[0-9]*$/.test(value)) {
            setUnitRate(value);
            setErrorMessage('');
        }
        else{
            setUnitRate('');
            setErrorMessage('Please enter numbers only');
        }
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
        console.log(currentReading);
        console.log(unitRate);
        console.log(event.target.assignedTo.value);
        const data = {
            currentReading: currentReading,
            unitPrice: unitRate,
            consumerId: event.target.assignedTo.value,

        };
        console.log(data);
        axios.post("https://wavebilling-backend-sabinlohani.onrender.com/reader/add-bill", data , 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        .then(res => {
          
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);

        });
      };

    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/reader/fetch-consumers", {
        headers: {
          Authorization:`Bearer ${token}`,
        }
      })
      .then((response) => {console.log(response.data); setTableData(response.data)})
      .catch((error) => console.log(error));
      }, [consumers]);


    useEffect(() => {
        if(selectedCustomerId){
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/reader/fetch-previous-reading", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => setPreviousReading(response.data.previousReading))
      .catch((error) => console.log(error));}
      }, [selectedCustomerId]);
    const handleCustomerSelect = (event) => {
        setSelectedCustomerId(event.target.value);
      }
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
                                    
                                    <TbFileText size={30} style={{color:'#0A83F0'}}/>
                                   
                                </div>
                                <div>
                                     <h4 className='text-center'style={{color:'#2F4858',height:'37px',fontWeight:'600'}}>Data Entry Form</h4>
                                </div>
                            </div>
                            </div> 
                            <div className='myTables'>
                                <form onSubmit={handleSubmit}>
                                    <p>Select the name of the customer: </p>
                                    <select className='inputBox' name='assignedTo' required style={{marginRight:'10px'}} onChange={handleCustomerSelect} >
                                        <option>Select the name of the customer</option>
                                        {tableData.map((row) => (
                                            <option key={row._id} value={row._id}>
                                            {row.name} : {row.meterNo}
                                            </option>                                      
                                        ))}
                                    </select>
                                    
                                    <p>Previous Reading: </p>
                                    {/* {tableData2.map((myRow) => (
                                                
                                        
                                       <p key={myRow._id}>
                                        <input type="text" name="previous" placeholder='Previous reading' value={previousReading} />
                                       </p>
                                       
                                      
                                    ))} */}
                                     <input type="text" name="previous" placeholder='Previous reading' value={previousReading} />
                                    
                                    {errorMessage2 && <p style={{color: 'red'}}>{errorMessage2}</p>}
                                    <p>Current Reading: </p>
                                    <input type="text" name="current" placeholder='Current reading' onChange={handleCurrentReading} required/>
                                    {errorMessage3 && <p style={{color: 'red'}}>{errorMessage3}</p>}
                                    <p>Per Units Price: </p>
                                    <input type="text" name="units" placeholder='Units consumed'  onChange={handleUnit} defaultValue="10"/>
                                    <input type="text" name="units" placeholder='Units consumed' value="m"/>
                                    {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
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