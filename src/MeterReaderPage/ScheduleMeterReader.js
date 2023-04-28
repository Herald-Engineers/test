import React, { useState } from 'react';
import '../Admin/MeterReader.css';
import {BiAddToQueue} from "react-icons/bi";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoadingSpinner from '../Components/LoadingSpinner';
import MeterSidebar from '../MeterReaderPage/MeterSidebar';
import MainBox from '../Admin/MainBoxes';
import MeterTable from '../Admin/MeterTable';
function ScheduleMeterReader(){
    return(
        <div>
            <div className='containerHome'>
                <div className='left-left-nav'>
                    <MeterSidebar/>
                </div>
            
            
                <div className='right-right-nav-Home2'>
                     
                   
                     <div className='myTables'>
                        <p>My Shifts: </p><br/>
                        <p>Address 1: </p>
                        <p>Address 2: </p>
                        <p>Address 3: </p>
                        <p>Address 4: </p>
                        <p>Address 5: </p>
                        <p>Shift: </p>
                        

                     </div>
                    
                    
                </div>
            </div>
            

        </div>
    );
}
export default ScheduleMeterReader;