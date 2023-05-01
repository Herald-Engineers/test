import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";
import MyAdmin from '../Admin/AdminSidebar';
import  '../HomePage/Homepage.css';
import  '../Admin/AdminDash.css';
import  '../Admin/MeterReader.css';
import  '../Components/SmallLogo.css';
import Main from '../Admin/MainBoxes';
import axios from 'axios';

function Issue(){
    const [tableData, setTableData] = useState([]);
    const [reader, setReader] = useState(null);
    const token = localStorage.getItem('token');
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/admin/fetch-issues", {
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

    
    return (
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MyAdmin/>
                </div>
           
                <div className='right-right-nav-Home2'>
                    <div>
                    <h1>Issues</h1>
                    
                    {tableData.map((row) => (
                            <React.Fragment key={row._id} className="issue-table">
                                <p className='MyClass'>
                               <p><b className='MyColor'>Full Name:</b> {row.name} </p>
                               <p><b className='MyColor'>User Id:</b> {row.userName} </p>
                               <p><b className='MyColor'>Phone Number:</b> {row.phoneNum} </p>
                               <p><b className='MyColor'>Subject:</b> {row.subject} </p>
                               <p><b className='MyColor'>Issue:</b> {row.issue} </p>
                               </p>
                               
                            </React.Fragment>
                            ))}
                    
                    </div>
                
                </div> 
            </div>
        </div>
    )
}
export default Issue;