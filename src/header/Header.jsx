import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <div className="Header"> 
      <nav> 
        <Link to='/'>Syn </Link>
        <Link to='/fir'>UDP</Link>
        <Link to='/sec'>ICMP</Link>
      </nav>
    </div>
  );
}

export default Header;
