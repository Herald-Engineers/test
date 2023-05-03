import React , { useState,useEffect }from 'react';
import { saveAs } from 'file-saver';
import Nav from '../NavbarFolders/Navbar';
import Sidebars from '../HomePage/Sidebar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import {PDFDownloadLink, Document, Page, View, Text } from '@react-pdf/renderer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function HistorySection(props) {
  const id =props.id;
  console.log("History section:",id);
  const token = localStorage.getItem('token');
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
      axios.get("https://wavebilling-backend-sabinlohani.onrender.com/fetch-bill-details", {
        headers: {
          Authorization: `Bearer ${token}`,
          
        },
        params: {
          _id: id
        }
      })
      .then((response) => {console.log(response.data);setTableData(response.data)})
      .catch((error) => console.log(error.response.data));
    }, [id,token]);
    return (
      <div className='text-center '>
        <div className='bill'>
        <h2 style={{color:'#2F4858',margin:'20px'}}>My Bill History</h2>
        <div className='historyTable'>

        
        <table className='' style={{fontSize:'20px'}}>
        {tableData.map((row) => (
          <React.Fragment key={row._id}>
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
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  console.log("View details: ",id);
    const token = localStorage.getItem('token');
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        axios.get("https://wavebilling-backend-sabinlohani.onrender.com/fetch-bill-details", {
          headers: {
            Authorization: `Bearer ${token}`,
           
          },
          params:{
            _id: id
          }
          
        
        })
        .then((response) => {console.log("My data is: ",response.data);console.log("My Id is: ",id);setTableData(response.data)})
        .catch((error) => console.log(error.response.data));
      }, [id,token]);
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
              
              {tableData.map((row) => (
                <React.Fragment key={row._id} className="downloadHistory">
                 <b> <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'800'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'1000',color:'#2F4858',marginRight:'5px'}} >Receipt date: </Text>{new Date(row.billDate).toLocaleDateString()}</Text></b>
                  <Text style={{marginBottom:'30px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Due Date: </Text>{new Date(row.dueBy).toLocaleDateString()}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Customer Id: </Text>{row.userId}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Customer Name:  </Text>{row.consumerName}</Text>
                  <Text style={{marginBottom:'10px',fontSize:'13px',fontWeight:'bolder'}}><Text style={{marginBottom:'20px',fontSize:'13px',fontWeight:'bolder',color:'#2F4858',marginRight:5}} >Customer Address:  </Text>{row.consumerAddress}</Text>
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
      function handleViewClick(id){
        // Render the ViewDetails component
        navigate("/payNow", { state: { id } });
      };
      
      
  return (
    <div className='containerHome'>
      <div className='left-left-nav'>
        <Sidebars />
      </div>
      <div className='right-right-nav-Home'>
        <div className=''>
          <Nav />
        </div>
        <HistorySection id={id}/>
          
        <div className='historyTable2'>
          <div id=''>
            <PDFDownloadLink document={<MyDoc />} fileName="historyBills.pdf">
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : <button  className='btn btn-primary'>Download</button>
              }
            </PDFDownloadLink>
          </div>
          <div>
           
            
              <button className='btn btn-primary' style={{margin:'10px'}} onClick={() => handleViewClick(id)}>Pay Now</button>
            
          </div>
          
        </div> 
       
      </div>
    </div>


  );
}


export default ViewDetails;
