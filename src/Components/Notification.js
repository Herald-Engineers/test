import React from 'react';
import { FiBell } from 'react-icons/fi';
import {  useState,useEffect } from 'react';
import '../Css/Notification.css';
import axios from 'axios';
function NotificationIcon() {
  const [fullName, setFullName] = useState('');
  const token = localStorage.getItem('token');
  const [myuserNames, setUsername] = useState('Loading...');
  
 
  useEffect(() => {
    axios.get('https://wavebilling-backend-sabinlohani.onrender.com/login', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => {
        const { fullName } = response.data;
        setFullName(fullName);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="notification-icon-container">
        <span style={{textAlign:'right',color: '#2F4858',marginRight:'10px',fontSize:'22px'}}>Hello {fullName}</span>
          <FiBell className="notification-icon" size={30} style={{color:'#2F4858',   marginBottom: '10px'}} />
            {/* {hasNotification && <div className="notification-dot"></div>} */}
     </div>
        
      
    
  );
}

export default NotificationIcon;