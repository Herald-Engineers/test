import MyAdmin from '../Admin/AdminSidebar';
import  '../HomePage/Homepage.css';
import  '../Admin/AdminDash.css';
import  '../Components/SmallLogo.css';
import Main from '../Admin/MainBoxes';
function Issue(){
    return (
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MyAdmin/>
                </div>
           
                <div className='right-right-nav-Home2'>
                    <div>
                        
                    </div>
                
                </div> 
            </div>
        </div>
    )
}
export default Issue;