import MyAdmin from '../Admin/AdminSidebar';
import  '../HomePage/Homepage.css';
import  '../Components/SmallLogo.css';
function AdminDashboard(){
    return (
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MyAdmin/>
                </div>
            </div>
            <div className='right-right-nav-Home'>
                <p>My page</p>
            </div>
        </div>
    )
}
export default AdminDashboard;