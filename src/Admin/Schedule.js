import MyAdmin from '../Admin/AdminSidebar';
import  '../HomePage/Homepage.css';
import  '../Admin/AdminDash.css';
import  '../Components/SmallLogo.css';
import Main from '../Admin/MainBoxes';
import Calendar from '../Image/Calendar.png';
function Schedule(){
    return (
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MyAdmin/>
                </div>
           
                <div className='justify-content-center right-right-nav-Home2'>
                    <div className='justify-content-center right-width '>
                        <div className='d-flex justify-content-center headingBorder'>
                            <div>
                                <img src={Calendar} alt="Schedule" className="" />
                               
                            </div>
                            <div>
                                 <h3 className='text-center'style={{color:'#2F4858'}}>Add Schedule</h3>
                            </div>
                        </div>
                        <form>
                            <div className='d-flex justify-content-center' style={{paddingTop:'45px'}}>
                                <div>
                                    <div>
                                        <label>Address</label><br/>
                                        <input type="text" name="address1" placeholder="Enter Address" className='inputBox'/><br/>
                                        <input type="text" name="address2" placeholder="Enter Address" className='inputBox'/><br/>
                                        <input type="text" name="address3" placeholder="Enter Address" className='inputBox'/><br/>
                                        <input type="text" name="address4" placeholder="Enter Address" className='inputBox'/><br/>
                                        <input type="text" name="address5" placeholder="Enter Address" className='inputBox'/><br/>

                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label>Date</label><br/>
                                        <input type="date" name="date" placeholder="Enter Date" className='inputBox'/><br/>
                                        <label>Shift</label><br/>
                                        <input type="text" name="shift" placeholder="Select the type of shift" className='inputBox'/><br/>
                                        <label>Assigned to:</label><br/>
                                        <input type="text" name="assignedTo" placeholder="Enter the name of the reader" className='inputBox'/>
                                    </div>

                                </div>
                            </div>
                            <input type="submit" value="submit" id='submitSchedule'/>
                        </form>
                    </div>
                
                </div> 
            </div>
        </div>
    )
}
export default Schedule;