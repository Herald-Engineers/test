import React, { useState,useEffect } from 'react';
import '../Admin/MeterReader.css';
import axios from 'axios';
import  { TbCalendarTime } from "react-icons/tb";
import MeterSidebar from '../MeterReaderPage/MeterSidebar';
import Nav from '../NavbarFolders/Navbar';

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
            
            
                <div className='right-right-nav'>
                    <div className=''>
                            <Nav/>
                    </div>
                    
                     <div className='MyScheduleBorder'>
                        <div className='d-flex justify-content-center headingBorder' style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',marginBottom:'40px'}}>
                            <div>
                                <TbCalendarTime  size={30} style={{paddingTop:'2px',marginRight:'10px', color:'#0A83F0'}}/>
                               
                            </div>
                            <div>
                                 <b><h4 className='text-center'style={{color:'#2F4858',height:'37px',fontWeight:'700'}}>My Schedule</h4></b>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center' style={{ height: '500px',  width: '1218px', overflowX: 'scroll',overflowY: 'scroll',paddingLeft:'37px'}}>
                            <div>
                                <table className='table table-striped meterReader-table outer-border' style={{margin:'30px',width:'95%'}}>
                                    <thead>
                                    <tr>
                                        <th style={{ width: '300px' }}>Address1</th>
                                        <th style={{ width: '300px' }}>Address2</th>
                                        <th style={{ width: '300px' }}>Address3</th>
                                        <th style={{ width: '300px' }}>Address4</th>
                                        <th style={{ width: '300px' }}>Address5</th>
                                        <th style={{ width: '300px' }}>Date</th>
                                        <th style={{ width: '100px' }}>Shift</th>

                                    </tr> </thead>
                                    <tbody> {tableData.map((row) => (
                                
                                    <tr key={row._id}>
                                       
                                   
                                    <td> {row.address1}                 </td>
                                    <td>{row.address2?row.address2:"-"} </td>
                                    <td>{row.address3?row.address3:"-"} </td>
                                    <td>{row.address4?row.address4:"-"} </td>
                                    <td>{row.address5?row.address5:"-"} </td>
                                    <td>{row.date}                      </td>
                                    <td> {row.shift}                    </td>
                                
                                
                               
                      
                            
                                    </tr>))}</tbody>
                                   
                                </table>
                            </div>
                           
                            <div className=''>
                                
                            </div>
                        
                        </div>                      
                        
                        

                     </div>
                    
                    
                </div>
            </div>
            

        </div>
    );
}
export default ScheduleMeterReader;