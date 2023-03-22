import MyImage from '../Image/profile.png';
import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import '../Css/EditProfile.css';

function Report(){
    const textcolor = {
        color: '#525252',
        
    };
    return(
        <div className='containerHome'>
        <div className='left-left-nav'>
            <Sidebars/>
        </div>
        <div className='right-right-nav-Home'>

        
        <div className=''>
            <Nav/>
        </div>
        
        <div className='report-section' id=''>

            <div>
                <h2 style={textcolor}>Report an issue</h2>
            </div>
            
            <div>
                <form>
                    <label>Reported by</label><br/>
                    <input type="text" id="report-username" placeholder='username'  className='login-field' required/>{'\n'}<br/>
                    <label>Summary</label><br/>
                    <input type="text" id="report-summary" placeholder='issue'  className='login-field' required/>{'\n'}<br/>
                    <label>Description</label><br/>
                    <textarea name="postContent" rows={4} cols={40} /><br/>
                    <input type="submit" id ="submit-report" />
                </form>
            </div >       
            </div>
        
        </div>
    </div>
    ); 
}
export default Report;