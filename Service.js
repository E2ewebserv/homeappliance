import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li><Link to="/service/washing-machine">Washing Machine Service</Link></li>
        <li><Link to="/service/ac">AC Service</Link></li>
        <li><Link to="/service/tv">TV Service</Link></li>
        <li><Link to="/service/fridge">Fridge Service</Link></li>
        <li><Link to="/service/microwave">Microwave Oven Service</Link></li>
      </ul>
    </div>
  );
};

export default Service;
