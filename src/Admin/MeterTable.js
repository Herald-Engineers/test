import { useEffect } from "react";
import TableData from "../Admin/TableData";
import Meter from '../Admin/DynamicTable';

function MeterTable(){
    

    return(
        <div className="text-center meter-table">
            <div>
                <h4>Kulekhani Upatyaka Khanepani Limited <span style={{color:'#0A83F0',fontFamily:'Montserrat',fontStyle:'normal',fontWeight:'700'}}>(Meter Readers)</span></h4>
            </div>
            <Meter />
        </div>
            

    );
}
export default MeterTable;
