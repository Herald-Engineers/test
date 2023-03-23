import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import HistoryTable from '../Components/Table';
const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Mary', age: 30 },
  { id: 3, name: 'Peter', age: 35 }
];

const columns = [
  { dataField: 'id', text: 'ID' },
  { dataField: 'name', text: 'Name' },
  { dataField: 'age', text: 'Age' }
];

function PaymentHistory() {
  return (
    <div> <HistoryTable />
    </div>
   

  );
}

export default PaymentHistory;