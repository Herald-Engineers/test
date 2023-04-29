import axios from 'axios';
import React, { useState } from 'react';
import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import '../Css/EditProfile.css';    
import MeterSidebar from '../MeterReaderPage/MeterSidebar';


function MeterIssue(){
    const [queries, setQueries] = useState("");
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');
    const handleQueries = (event) => {
        setQueries(event.target.value);
    };
    const handleSubmit = (event) => {
        const submitBtn = document.getElementById('contact-submit');
        submitBtn.disabled = true;
        setLoading(true);

        event.preventDefault();
        axios.post("https://wavebilling-backend-sabinlohani.onrender.com/contact-wavebilling", {
            
            queries: queries
        },
        {
            headers: {
            Authorization: `Bearer ${token}`, // Add token to headers
            },
        })
        .then(res => {
            submitBtn.disabled = false;
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
                           
                        <h1>Issue</h1>
                        <p>
                            Report an issue if any:
                        </p>
                        <form onSubmit={handleSubmit}>
                            <textarea name="queries" id="queries" cols="60" rows="10" className='input_name' value={queries}onChange={handleQueries} /><br/>
                            <input type='submit'/>
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