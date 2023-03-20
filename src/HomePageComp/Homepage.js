import React from 'react';
import { useLocation } from 'react-router-dom';

function Homepage() {
  const location = useLocation();
  const { inputValue } = location.state || {};

  return (
    <div>
      <p>Hello, {inputValue}!</p>
    </div>
  );
}

export default Homepage;