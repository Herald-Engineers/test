import  '../Admin/MainBox.css';
import Image1 from '../Image/total1.png';
import Image2 from '../Image/total2.png';
import Image3 from '../Image/total3.png';
import Metereader from '../Admin/MeterReader';
function MainBox(){
    return(
        <div>
            
            <div className='d-flex'>
                        <div className='FirstBox' onClick={<Metereader/>}>
                            <div className=''>
                                <div style={{float:'left'}}>
                                    <img src={Image1} alt="logout" className="" />
                                </div>
                                <div style={{float:'right',marginTop: '9px',paddingRight: '25px'}}>
                                    <span style={{fontSize:'18px',fontWeight:'700',marginTop:'10px'}}>Total Users</span><br/>
                                    <span style={{fontSize:'14px',fontWeight:'500',color:'black'}}>Rs. 2996</span>
                                </div>
                                
                                                                
                            </div>
                                
                        </div>
                        <div className='FirstBox'>
                            
                            <div className=''>
                                <div style={{float:'left'}}>
                                    <img src={Image2} alt="logout" className="" style={{paddingTop: '7px'}} />
                                </div>
                                <div style={{float:'right',marginTop: '9px',paddingRight: '45px'}}>
                                        <span style={{fontSize:'18px',fontWeight:'700',marginTop:'10px'}}>Due Payments</span><br/>
                                        <span style={{fontSize:'14px',fontWeight:'500',color:'black'}}>0</span>
                                </div>
                                    
                                                                    
                            </div>
                        </div>
                        <div className='FirstBox'>
                            <div className=''>
                                    <div style={{float:'left'}}>
                                            <img src={Image3} alt="logout" className="" style={{paddingTop: '7px'}}/>
                                    </div>
                                    <div style={{float:'right',marginTop: '9px',paddingRight: '14px'}}>
                                            <span style={{fontSize:'18px',fontWeight:'700',marginTop:'10px'}}>Advance Payments</span><br/>
                                            <span style={{fontSize:'14px',fontWeight:'500',color:'black'}}>3</span>
                                    </div>
                                    
                                                                    
                            </div>
                        </div>
                    </div>
        </div>
    );
}
export default MainBox;

