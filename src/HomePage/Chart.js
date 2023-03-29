import React from 'react';

import Chart from "react-apexcharts";
import { useState } from 'react';

function Mychart(){
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
            data: [4000,5000,7000,8000,11000,7283,12000,3000,2000,5000,6888,7000]
          }
        ]
      });
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
   
