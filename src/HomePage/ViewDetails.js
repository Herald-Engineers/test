import React , { useState,useEffect }from 'react';
import { saveAs } from 'file-saver';
import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import { Link } from 'react-router-dom';


import {PDFDownloadLink, Document, Page, View, Text } from '@react-pdf/renderer';
import axios from 'axios';

function HistorySection() {
  const token = localStorage.getItem('token');
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
      axios.get("https://wavebilling-backend-sabinlohani.onrender.com/my-bills", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {console.log(response.data);setTableData(response.data)})
      .catch((error) => console.log(error.response.data));
    }, []);
    return (
      <div className='text-center '>
        <div className='bill'>
        <h2 style={{color:'#2F4858',margin:'20px'}}>My Bill History</h2>
        <div className='historyTable'>

        
        <table className='' style={{fontSize:'20px'}}>
        {tableData.map((row) => (
          <React.Fragment key={row.id}>
            <tr>
              <th>Receipt date:</th>
              <td>{new Date(row.billDate).toLocaleDateString()}</td>
            </tr>
            <tr style={{marginBottom:'30px'}}>
              <th>Due Date:</th>
              <td >{new Date(row.dueBy).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th>Customer Id:</th>
              <td>{row.userId}</td>
            </tr>
            <tr>
               <th>Customer Name: </th>
              <td>{row.consumerName}</td>
            </tr>
                  <tr>
                    <th>Customer Address:</th> <td>{row.consumerAddress}</td></tr>
                  <tr>
                    <th>Water charges: </th><td>100</td></tr>
                  <tr>
                    <th>Sewage Charge: </th><td>50</td></tr>
                  <tr>
                    <th>Bill Amount:</th><td> {row.billAmount}</td></tr>
                  <tr>
                    <th>Fine percent: </th><td>{row.finePercent}</td></tr>
                  <tr>
                    <th>Rebate percent: </th><td>{row.rebateAmount}</td> </tr>
                  <tr>
                    <th>Fine amount:</th><td> {row.fineAmount}</td></tr>
                  <tr>
                    <th>Rebate amount: </th><td>{row.rebateAmount}</td></tr>
                  
                  <tr>
                    <th>Total to be paid: </th><td>{row.totalAmount}</td></tr>
          </React.Fragment>
           ))}
        </table>
        </div>
        </div>
      </div>
    );
  }


function ViewDetails() {
    const token = localStorage.getItem('token');
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/my-bills", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((response) => {console.log(response.data);setTableData(response.data)})
        .catch((error) => console.log(error.response.data));
      }, []);
      const myStyle =()=>{
        return{
          fontSize:'13px',
          fontWeight:'600',
          marginBottom:'20px'
        }
      }
      const MyDoc = () => (
        console.log('MyDoc component rendered'),
        <Document>
          <Page>
            <View style={{ marginBottom: 8, padding:'30px'}}>
              <Text style={{marginBottom:'20px',fontSize:'19px',fontWeight:'800',textAlign:'center'}}>My Bill </Text>
              console.log(table.data);
              {tableData.map((row) => (
                <React.Fragment key={row.id} className="downloadHistory">
                 <b> <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'800'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'1000',color:'#2F4858',marginRight:'5px'}} >Receipt date: </Text>{new Date(row.billDate).toLocaleDateString()}</Text></b>
                  <Text style={{marginBottom:'30px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Due Date: </Text>{new Date(row.dueBy).toLocaleDateString()}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Customer Id: </Text>{row.userId}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Customer Name:  </Text>{row.consumerName}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Customer Address:  </Text>{row.consumerAddress}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Water charges: </Text>100</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Sewage Charge: </Text>50</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Bill Amount: </Text>{row.billAmount}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Fine percent: </Text>{row.finePercent}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Rebate percent: </Text>{row.rebateAmount} </Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Fine amount: </Text>{row.fineAmount}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Rebate amount: </Text>{row.rebateAmount}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Total to be paid: </Text>{row.totalAmount}</Text>
                </React.Fragment>
              ))}
            </View>
          </Page>
        </Document>
      );
      // const MyDoc = () => (
      //   <Document>
      //     <Page>
      //       <View>
      //         <Text>My Bill History</Text>
      //         <Table
      //           data={tableData}
      //           headers={[
      //             'Receipt date',
      //             'Due date',
      //             'Customer Id',
      //             'Customer Name',
      //             'Customer Address',
      //             'Water charges',
      //             'Sewage Charge',
      //             'Bill Amount',
      //             'Fine percent',
      //             'Rebate percent',
      //             'Fine amount',
      //             'Rebate amount',
      //             'Total to be paid',
      //           ]}
      //           renderCell={(rowIndex, columnIndex) => {
      //             const row = tableData[rowIndex];
      //             switch (columnIndex) {
      //               case 0:
      //                 return new Date(row.billDate).toLocaleDateString();
      //               case 1:
      //                 return new Date(row.dueBy).toLocaleDateString();
      //               case 2:
      //                 return row.userId;
      //               case 3:
      //                 return row.consumerName;
      //               case 4:
      //                 return row.consumerAddress;
      //               case 5:
      //                 return 100;
      //               case 6:
      //                 return 50;
      //               case 7:
      //                 return row.billAmount;
      //               case 8:
      //                 return row.finePercent;
      //               case 9:
      //                 return row.rebateAmount;
      //               case 10:
      //                 return row.fineAmount;
      //               case 11:
      //                 return row.rebateAmount;
      //               case 12:
      //                 return row.totalAmount;
      //               default:
      //                 return '';
      //             }
      //           }}
      //         />
      //       </View>
      //     </Page>
      //   </Document>
      // );
      // const MyDoc = () => (
      //   <Document>
      //     <Page>
      //       <View>
      //         <Text style={{ marginBottom: 8, fontSize: 19, fontWeight: 'bold' }}>My Bill History</Text>
      //         <View style={{ marginBottom: 8 }}>
      //           <View style={{ flexDirection: 'column', marginBottom: 4 }}>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Receipt Date</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Due Date</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Customer ID</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Customer Name</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Customer Address</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Water Charges</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Sewage Charge</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Bill Amount</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Fine Percent</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Rebate Percent</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Fine Amount</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Rebate Amount</Text>
      //             <Text style={{ flex: 1, fontWeight: 'bold' }}>Total to be Paid</Text>
      //           </View>
      //           {tableData.map((row) => (
      //             <View key={row.id} style={{ flexDirection: 'column', marginBottom: 4 }}>
      //               <Text style={{ flex: 1 }}>{new Date(row.billDate).toLocaleDateString()}</Text>
      //               <Text style={{ flex: 1 }}>{new Date(row.dueBy).toLocaleDateString()}</Text>
      //               <Text style={{ flex: 1 }}>{row.userId}</Text>
      //               <Text style={{ flex: 1 }}>{row.consumerName}</Text>
      //               <Text style={{ flex: 1 }}>{row.consumerAddress}</Text>
      //               <Text style={{ flex: 1 }}>100</Text>
      //               <Text style={{ flex: 1 }}>50</Text>
      //               <Text style={{ flex: 1 }}>{row.billAmount}</Text>
      //               <Text style={{ flex: 1 }}>{row.finePercent}</Text>
      //               <Text style={{ flex: 1 }}>{row.rebateAmount}</Text>
      //               <Text style={{ flex: 1 }}>{row.fineAmount}</Text>
      //               <Text style={{ flex: 1 }}>{row.rebateAmount}</Text>
      //               <Text style={{ flex: 1 }}>{row.totalAmount}</Text>
      //             </View>
      //           ))}
      //         </View>
      //       </View>
      //     </Page>
      //   </Document>
      // );
      
      
  return (
    <div className='containerHome'>
      <div className='left-left-nav'>
        <Sidebars />
      </div>
      <div className='right-right-nav-Home'>
        <div className=''>
          <Nav />
        </div>
        <HistorySection />
          
        <div className='historyTable2'>
          <div id=''>
            <PDFDownloadLink document={<MyDoc />} fileName="historyBills.pdf">
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : <button  className='btn btn-primary'>Download</button>
              }
            </PDFDownloadLink>
          </div>
          <div>
            <Link to='/payNow'>
            
            <button className='btn btn-primary' style={{margin:'10px'}}>Pay Now</button>
          </Link>
          </div>
          
        </div> 
       
      </div>
    </div>


  );
}


export default ViewDetails;
