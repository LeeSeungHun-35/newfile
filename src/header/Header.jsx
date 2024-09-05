import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <div className="Header"> 
      <nav> 
        <Link to='/'>Syn </Link>
        <Link to='/fir'>공격 기법</Link>
        <Link to='/sec'>보안 분석</Link>
      </nav>
    </div>
  );
}

export default Header;
