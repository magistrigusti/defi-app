import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo'>TONSWAP</div>
      <div className='menu'>
        <div className='menu-links'>
          <a href='/'>App</a>
          <a href='/'>Products</a>
          <a href='/'>Builds</a>
          <a href='/'>Careers</a>
          <a href='/'>About</a>
        </div>
      </div>
      <div className='wallet-btn'>
        <button className='primary'>Enter App</button>
      </div>
    </div>
  )
}

export default Header;