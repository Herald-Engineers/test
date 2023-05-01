import axios from 'axios';
import React, { useState } from 'react';
import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import '../Css/EditProfile.css';    
import MeterSidebar from '../MeterReaderPage/MeterSidebar';


function MeterIssue(){
    const [queries, setQueries] = useState("");
    const [subject, setSubject] = useState("");
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    const handleQueries = (event) => {
        setQueries(event.target.value);
    };
    const handleSubject = (event) => {
        setSubject(event.target.value);
    };

    const handleSubmit = (event) => {
        
        setLoading(true);

        event.preventDefault();
        axios.post("https://wavebilling-backend-sabinlohani.onrender.com/submit-issue", {
            
            issue: queries,
            subject: subject
        },
        {
            headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
            },
        })
        .then(res => {
            
            setLoading(false);

            alert(res.data.message);
            console.log(res.data);
            // Redirect to the user's dashboard or some other page
        })
        .catch(error => {
            setLoading(true);
            console.log(error);
        });
    };
    return(
       
       
        <div className='containerHome'>
        <div className='left-left-nav'>
            <MeterSidebar/>
        </div>
        <div className='right-right-nav-Home'>

        
        <div className=''>
            <Nav/>
        </div>
        
        <div className='' id='EditProfile'>
            <div className='d-flex'>
                <div className='changeSection'>
                    <div>
                           
                        <h1>Report an Issue</h1>
                            
                        <form onSubmit={handleSubmit}>
                                <table>
                                    <tr>
                                        <td >Subject: </td>
                                        
                                    </tr>
                                    <tr>
                                        <input type='text' placeholder='Enter your issue' name="subject"onChange={handleSubject} className='MySubject'/>
                                    </tr>
                                   
                                </table>
                                <br/>
                                <p>Details:</p>
                                <textarea name="queries" id="queries" cols="60" rows="10" className='input_name' placeholder="Explain your issue"value={queries} onChange={handleQueries} /><br/>
                                <input type='submit' className='IssueSubmit'/>
                            </form>
                    </div>
                        
                </div>
            </div >       
        </div>

        </div>
    </div>
    )
}
export default MeterIssue;