import React from 'react';
import  { useEffect }from 'react';
import Chart from "react-apexcharts";
import { useState } from 'react';
import axios from 'axios';

function Mychart(){
  const token = localStorage.getItem('token');
  const [tableData, setTableData] = useState([]);
  

    const [state,setState] = useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct","Nov","Dec"]
          },
          yaxis: {
            categories: [20,30,40,50,60,70,80,90,100]
          },
          colors : ['#6092C0']
        },
        colors: {
          ranges: [
            {
              from: 0,
              to: 5000,
              color: '#6092C0'
            },
            {
              from: 5000,
              to: 10000,
              color: '#60C080'
            },
            {
              from: 10000,
              to: 15000,
              color: 'bluex`'
            },
            {
              from: 15000,
              to: 20000,
              color: 'red'
            }
          ]
        },
      
        series: [
          {
            name: "series-1",
            data: []
          }
        ]
      });
      useEffect(() => {
        axios
          .get('https://wavebilling-backend-sabinlohani.onrender.com/get-report', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const { data } = response;
    
            // Update the data property of the series object in the state
            setState((prevState) => ({
              ...prevState,
              series: [
                {
                  name: 'Series 1',
                  data: data.map((item) => item.units), // map the billAmount data from the response
                },
              ],
            }));
          })
          .catch((error) => console.log(error.response.data));
      }, []);
     return(
        <div>
            <div className='row'>
                <div className='col-3'>
                    <Chart
                                options={state.options}
                                series={state.series}
                                type="bar"
                                width="740"
                                height="300"
                                
                                />
                </div>
            </div>
            
        </div>
     );
}
export default Mychart;
   
