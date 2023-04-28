import React from 'react';
import { FiBell } from 'react-icons/fi';
import {  useState,useEffect } from 'react';
import '../Css/Notification.css';
import axios from 'axios';
function NotificationIcon({ hasNotification }) {
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    const fullNameValue = localStorage.getItem('fullName');
    setFullName(fullNameValue);
  }, []);
  return (
    <div className="notification-icon-container">
        <span style={{textAlign:'right',color: '#2F4858',marginRight:'10px',fontSize:'22px'}}>Hi {fullName}</span>
          <FiBell className="notification-icon" size={30} style={{color:'#2F4858',   marginBottom: '10px'}} />
            {/* {hasNotification && <div className="notification-dot"></div>} */}
          
     </div>
        
      
    
  );
}

export default NotificationIcon;