import MyAdmin from '../Admin/AdminSidebar';
import  '../HomePage/Homepage.css';
import  '../Admin/AdminDash.css';
import  '../Components/SmallLogo.css';
import MeterReader from '../Admin/MeterReader';
import Main from '../Admin/MainBoxes';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function AdminDashboard() {
    if(!localStorage.token) {
        console.log('No token is: ' + !localStorage.token);
        // return (
        //     <div>
        //         Unauthorized user
        //     </div>
        // );
    }
    return (
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MyAdmin/>
                </div>
           
                <div className='right-right-nav-Home2'>
                    <div>
                        <Main/>
                    </div>
                
                </div> 
            </div>
        </div>
    )
}
export default AdminDashboard;