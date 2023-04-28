import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';



function ViewSChedule(){
    const token = localStorage.getItem('token');
    const [tableData, setTableData] = useState([]);
    const [reader, setReader] = useState(null);
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/admin/fetch-schedules", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log(response);
        setTableData(response.data);
      })
      .catch((error) => console.log(error));
      }, [reader]);
    return(
        <div>
            
            <div className='justify-content center right-width myTables2'style={{ width: '1078px', height:'400px',marginBottom: '40px'}}>
                <div className='d-flex justify-content-center headingBorder' style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                                
                                <div>
                                    <h4 className='text-center'style={{color:'#2F4858',height:'37px',fontWeight:'600'}}>View Schedule</h4>
                                </div>
                </div>

                <div style={{ width: '1099px', marginTop:'40px' , marginLeft: '40px',marginRight: '40px'}}>
                    <table className='table table-striped meterReader-table outer-border'>
                        <thead>
                            <tr>
                                <th style={{ width: '500px' }}>Name</th>
                                <th style={{ width: '8  00px' }}>Address1</th>
                                <th style={{ width: '500px' }}>address2</th>
                                <th style={{ width: '500px' }}>Address3</th>
                                <th style={{ width: '500px' }}>Address4</th>
                                <th style={{ width: '500px' }}>Address5</th>
                                <th style={{ width: '500px' }}>Date</th>
                                <th style={{ width: '500px' }}>Shift</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row) => (
                                <tr key={row._id}>
                                    <td>{row.assignedTo}</td>
                                    <td>{row.address1}</td>
                                    <td>{row.address2}</td>
                                    <td>{row.address3}</td>
                                    <td>{row.address4}</td>
                                    <td>{row.address5}</td>
                                    <td>{row.date}</td>
                                    <td>{row.shift}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default ViewSChedule;