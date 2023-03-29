import MyAdmin from '../Admin/AdminSidebar';
import  '../HomePage/Homepage.css';
import  '../Components/SmallLogo.css';
import MeterReader from '../Admin/MeterReader';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function AdminDashboard(){
    return (
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MyAdmin/>
                </div>
            </div>
            <div className='right-right-nav-Home'>
            // In your Route component, define the path and component:
            <Route exact path="/meter-reader" component={MeterReader} />
            </div>
        </div>
    )
}
export default AdminDashboard;