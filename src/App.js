import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/form.css';
import NextPage from './NextPage';
import Login from './Login';
import Otp from './Otp';
import CreateAccount from './CreateAcc';
import Mybills from './MyBills';
import ConversationTip from './Conversation';
import Myaccount from './MyAccount';
import HomeLayout from './HomePage/HomeLayout';
import  './Components/SmallLogo.css';
import Homepage from './HomePageComp/Homepage';
import Landingpage from './LandingPage';
import SignIn from './SignUp/SignInAs';
import MeterReader from './Admin/MeterReader';
import User from './SignUp/User';
import Graph from './HomePage/Chart';
import PopUpBox from './Components/PopUpMenu';
import MyAdmin from'./Admin/AdminSidebar';
import AdminDashboard from'./Admin/AdminDash';
import Register  from './SignUp/Register';
import EditProfile from './HomePage/EditProfile';
import Sidebar from './HomePage/Sidebar';
import ContactUs from './Components/ContactUs';
import ContactUsHome from './HomePage/ContactHome';
import Report from './HomePage/Report';
import BillHistory from './HomePage/BillHIstory';
import Payment from './HomePage/PaymentHistory';
import TableHistory from './Components/Table';
import Kukl from './HomePage/KUKLPay';
import UserTable from './Admin/UserTable';



function App() {
  return (
    
    <BrowserRouter>
        
      <Routes>
      
        <Route path="/nextpage" element={<NextPage />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/createAcc" element={<CreateAccount />} />
        <Route path="/homela" element={<HomeLayout />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/mybills" element={<Mybills />} />
        <Route path="/conversation" element={<ConversationTip />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/signinas" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/meterReader" element={<MeterReader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/chart" element={<Graph />} />
        <Route path="/popUp" element={<PopUpBox />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contactushome" element={<ContactUsHome />} />
        <Route path="/report" element={<Report />} />
        <Route path="/billHistory" element={<BillHistory />} />
        <Route path="/paymentHistory" element={<Payment />} />
        <Route path="/table" element={<TableHistory />} />
        <Route path="/kukl" element={<Kukl />} />
        <Route path="/myadmin" element={<AdminDashboard />} />
        <Route path="/myadminsidebar" element={<MyAdmin />} />
        <Route path="/userTable" element={<UserTable />} />
        
      </Routes>
    </BrowserRouter>
    
    
  );
 

}

export default App;