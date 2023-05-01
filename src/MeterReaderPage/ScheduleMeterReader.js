import React, { useState,useEffect } from 'react';
import '../Admin/MeterReader.css';
import axios from 'axios';
import  { TbCalendarTime } from "react-icons/tb";
import MeterSidebar from '../MeterReaderPage/MeterSidebar';


function ScheduleMeterReader(){
    const [tableData, setTableData] = useState([]);
    const [reader, setReader] = useState(null);
    const token = localStorage.getItem('token');
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/reader/fetch-schedule", {
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

    return(
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MeterSidebar/>
                </div>
            
            
                <div className='right-right-nav-Home2'>
                     
                   
                     <div className='MyScheduleBorder'>
                        <div className='d-flex justify-content-center headingBorder' style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',marginBottom:'40px'}}>
                            <div>
                                <TbCalendarTime  size={30} style={{paddingTop:'2px',marginRight:'10px', color:'#0A83F0'}}/>
                               
                            </div>
                            <div>
                                 <b><h4 className='text-center'style={{color:'#2F4858',height:'37px',fontWeight:'700'}}>My Schedule</h4></b>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className=''>
                                <b style={{color:'#2F4858',fontSize:'20px'}}>
                                <p>Address1</p>
                                <p>Address2</p>
                                <p>Address3</p>
                                <p>Address4</p>
                                <p>Address5</p>
                                <p>Date</p>
                                <p>Shift</p>
                                </b>
                            </div>
                            <div className=''>
                                {tableData.map((row) => (
                                <React.Fragment key={row._id} className="">
                                    <p className='MyClass' style={{fontSize:'20px'}}>
                                <p> {row.address1} </p>
                                <p>{row.address2?row.address2:"-"} </p>
                                <p>{row.address3?row.address3:"-"} </p>
                                <p>{row.address4?row.address4:"-"} </p>
                                <p>{row.address5?row.address5:"-"} </p>
                                <p>{row.date} </p>
                                <p> {row.shift} </p>
                                
                                </p>
                               
                            </React.Fragment>
                            ))}
                            </div>
                        
                        </div>                      
                        
                        

                     </div>
                    
                    
                </div>
            </div>
            

        </div>
    );
}
export default ScheduleMeterReader;