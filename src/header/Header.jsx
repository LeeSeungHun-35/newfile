import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <div className="Header"> 
      <nav> 
        <Link to='/'>Home</Link>
        <Link to='/fir'>Fir</Link>
        <Link to='/sec'>Sec</Link>
      </nav>
    </div>
  );
}

export default Header;
