import MyAdmin from '../Admin/AdminSidebar';
import  '../HomePage/Homepage.css';
import  '../Admin/AdminDash.css';
import  '../Components/SmallLogo.css';
import {  useState, useEffect} from 'react';
import Main from '../Admin/MainBoxes';
import axios from 'axios';
import Calendar from '../Image/Calendar.png';
function Schedule(){
    const token = localStorage.getItem('token');
    const [tableData, setTableData] = useState([]);
    const [reader, setReader] = useState(null);

    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/admin/fetch-readers", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => setTableData(response.data.length))
      .catch((error) => console.log(error));
      }, [reader]);
    
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [address3, setAddress3] = useState("");
    const [address4, setAddress4] = useState("");
    const [date, setDate] = useState("");
    const [shift, setShift] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const handleAddress1 = (event) => {
        setAddress1(event.target.value);
    };
    const handleAddress2 = (event) => {
        setAddress2(event.target.value);
    };
    const handleAddress3 = (event) => {
        setAddress3(event.target.value);
    };
    const handleAddress4 = (event) => {
        setAddress4(event.target.value);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
       
        console.log("hello");
    
         // Send a POST request to the server with the entered username and password
        axios.post("https://wavebilling-backend-sabinlohani.onrender.com/login", {
          address1: address1,
          address2: address2,
          address3: address3,
          address4: address4,
          date: date,
          shift: shift,
          assignedto: assignedto,

        })
        .then(res => {
          const token = res.data.token;
         
           // Depending on the user role, navigate to a different page
          
          console.log(res.data);
          
        })
        .catch(error => {
          console.log(error);
        
        });
      };
    return (
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MyAdmin/>
                </div>
           
                <div className='justify-content-center right-right-nav-Home2'>
                    <div className='justify-content-center right-width '>
                        <div className='d-flex justify-content-center headingBorder' style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                            <div>
                                <img src={Calendar} alt="Schedule" className="" style={{width: '30px',height: '30px',left: '873px',top: '207px'}}/>
                               
                            </div>
                            <div>
                                 <h4 className='text-center'style={{color:'#2F4858',height:'37px',fontWeight:'600'}}>Add Schedule</h4>
                            </div>
                        </div>
                        <form >
                            <div className='d-flex justify-content-center' style={{paddingTop:'45px'}}>
                                <div>
                                    <div style={{paddingRight:'20px'}}>
                                        <label>Address</label><br/>
                                        <input type="text" name="address1" placeholder="Enter Address" className='inputBox' required  /><br/>
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
                                        <select>
                                            <option value="1">Morning</option>
                                            <option value="2">Afternoon</option>
                                            <option value="3">Evening</option>
                                        </select>
                                        <label>Assigned to:</label><br/>
                                        <input type="text" name="assignedTo" placeholder="Enter the name of the reader" className='inputBox'/>
                                        <select>
                                            {tableData.map((row) => (
                                                <option key={row._id}>
                                                <td>{row.fullName}</td>
                                                
                                                
                                                </option>
                                            ))} 
                                            </select>
                                    </div>

                                </div>
                            </div>
                            <input type="submit" value="Submit" id='submitSchedule'/>
                        </form>
                    </div>
                
                </div> 
            </div>
        </div>
    )
}
export default Schedule;