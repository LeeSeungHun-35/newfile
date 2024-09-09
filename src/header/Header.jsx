import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <div className="Header"> 
      <nav> 
        <Link to='/'>Syn </Link>
        <Link to='/fir'>OSI 7 Layer</Link>
        <Link to='/sec'>용어정리</Link>
      </nav>
    </div>
  );
}

export default Header;
