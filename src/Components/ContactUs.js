import '../Css/LandingPage.css';
const [accountNo, setAccountNo] = useState("");
const [contactNum, setContact] = useState("");
const [bankName, setBank] = useState("");
const [isChecked, setIsChecked] = useState(false);
const [errorMsg, setErrorMsg] = useState('');
const [paymentDueDate, setDueDate] = useState("");
function Contact(){
    return(
        <div className='form-section'> 
            <form>             
                <div className='d-flex '>
                    <div className='line_space'>
                        <label>First Name</label><br></br>
                        <input type="text" placeholder="First Name" className='input_name'/><br></br>
                        <label>Email</label><br></br>
                        <input type="text" placeholder="Email Address" className='input_name'/>
                    </div>

                    <div className=''>
                        <label>Last Name</label><br></br>
                        <input type="text" placeholder="Last Name" className='input_name'/><br></br> 
                        <label>Phone Number</label><br></br>
                        <input type="text" placeholder="Phone Number" className='input_name'/>
                    </div> 
                </div>
                <div className='line_space'>
                    <p >Queries</p>
                    <textarea name="queries" id="queries" cols="60" rows="10" className='input_name'></textarea><br>
                    </br> <input type="submit" value="Submit" />
                </div>
            </form>             
        </div>
    );
}
export default Contact;