import MyAdmin from '../Admin/AdminSidebar';
import  '../HomePage/Homepage.css';
import  '../Components/SmallLogo.css';
import MeterReader from '../Admin/MeterReader';
import Main from '../Admin/MainBoxes';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function AdminDashboard(){
    return (
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MyAdmin/>
                </div>
           
                <div className='right-right-nav-Home'>
                    <div>
                        <Main/>
                    </div>
                
                </div> 
            </div>
        </div>
    )
}
export default AdminDashboard;