import React from 'react';
import logo from '../../assets/image/logo.jpg';
import { Link } from 'react-router-dom';




const Headers = () => {
  return (
    <>
      <div className='header'>
        <Link to="/">
          <div className='logo'>
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <h1>Guldbaggens GlosApp</h1>
      </div>
    </>
  );
};

export default Headers;
