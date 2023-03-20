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
import MeterReader from './SignUp/MeterReader';
import User from './SignUp/User';
import Graph from './HomePage/Chart';
import PopUpBox from './Components/PopUpMenu';
import Admin from'./Admin.js/Register';


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
        <Route path="/meterReader" element={<MeterReader />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/chart" element={<Graph />} />
        <Route path="/popUp" element={<PopUpBox />} />
        
        
      </Routes>
    </BrowserRouter>
    
    
  );
 

}

export default App;