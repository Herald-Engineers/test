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
          }
        },
        series: [
          {
            name: "series-1",
            data: [4000,5000,7000,8000,11000]
          }
        ]
      });
     return(
        <div>
            <div className='row'>
                <div className='col-4'>
                    <Chart
                                options={state.options}
                                series={state.series}
                                type="bar"
                                width="500"
                                />
                </div>
            </div>
            
        </div>
     );
}
export default Mychart;
   
