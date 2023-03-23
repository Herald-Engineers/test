import '../Css/LandingPage.css';
function Contact(){
    return(
        <div className='form-section'> 
                            
                            <div className='d-flex '>
                                <div className='line_space'>
                                    <form>
                                        <label>First Name</label><br></br>
                                    <input type="text" placeholder="First Name" className='input_name'/><br></br>
                               
                                    <label>Email</label><br></br>
                                    <input type="text" placeholder="Email Address" className='input_name'/>
                                    </form>
                                    
                                
                                </div>

                                <div className=''>
                                    <form>
                                         <label>Last Name</label><br></br>
                                         <input type="text" placeholder="Last Name" className='input_name'/><br></br> 
                                        
                                        <label>Phone Number</label><br></br>
                                        <input type="text" placeholder="Phone Number" className='input_name'/>
                                    
                                    </form>
                                   
                                </div> 
                                
                        
                            
                        
                            </div>
                            <div className='line_space'>
                                <p >Queries</p>
                                <textarea name="queries" id="queries" cols="60" rows="10" className='input_name'></textarea><br>
                            
                                
                                </br> <form><input type="submit" value="Submit" /></form>
                           </div>
                          
                        </div>
    );
}
export default Contact;