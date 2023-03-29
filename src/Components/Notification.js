import React from 'react';
import { FiBell } from 'react-icons/fi';
import '../Css/Notification.css';

function NotificationIcon({ hasNotification }) {
  return (
    <div className="notification-icon-container">
        <span style={{textAlign:'right',color: '#2F4858',marginRight:'10px',fontSize:'22px'}}>Hello Sugam</span>
          <FiBell className="notification-icon" size={30} style={{color:'#2F4858',   marginBottom: '10px'}} />
            {/* {hasNotification && <div className="notification-dot"></div>} */}
     </div>
        
      
    
  );
}

export default NotificationIcon;