import { useEffect } from "react";
import TableData from "./TableData";
import {  useState } from 'react';
import axios from 'axios';
import '../Admin/MeterReader.css';
function DynamicTable(){

    const [tableData, setTableData] = useState([]);
    const token = localStorage.getItem('token'); // retrieve token from local storage or state
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/admin/fetch-readers", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        .then((response) => setTableData(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    const handleEdit = (id) => {
      // handle edit logic here
      console.log(`Edit row with ID ${id}`);
    };
  
    const handleDelete = (id) => {
      // handle delete logic here
      console.log(`Delete row with ID ${id}`);
    };
  


  return (
    <table className="table table-striped meterReader-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact Number</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((row) => (
        <tr key={row._id}>
          <td>{row.fullName}</td>
          <td>{row.email}</td>
          <td>{row.contactNum}</td>
          <td>
            <button onClick={() => handleEdit(row._id)}>Edit</button>
          </td>
          <td>
            <button onClick={() => handleDelete(row._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  );
}
export default DynamicTable;