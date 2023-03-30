import React from 'react';
import { FiBell } from 'react-icons/fi';
import {  useState,useEffect } from 'react';
import '../Css/Notification.css';
import axios from 'axios';
function NotificationIcon({ hasNotification }) {
  const [sugam, setSugam] = useState('');
  const [userId, setUserId] = useState('');
  useEffect(() => {
    axios.post('https://wavebilling-backend-sabinlohani.onrender.com/login')
      .then(response => {
        const sugamData = response.data;
        const userIdValue = response.data.userId;
        setUserId(userIdValue);
        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div className="notification-icon-container">
        <span style={{textAlign:'right',color: '#2F4858',marginRight:'10px',fontSize:'22px'}}>Hello {userId}</span>
          <FiBell className="notification-icon" size={30} style={{color:'#2F4858',   marginBottom: '10px'}} />
            {/* {hasNotification && <div className="notification-dot"></div>} */}
     </div>
        
      
    
  );
}

export default NotificationIcon;