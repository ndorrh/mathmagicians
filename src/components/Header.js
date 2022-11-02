import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Calculator">Calculator</Link></li>
      <li><Link to="/about">Quote</Link></li>
    </ul>
  </nav>
);

export default Header;
