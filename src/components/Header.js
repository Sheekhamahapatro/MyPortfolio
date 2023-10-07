/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//images
import Logo from '../assets/Logo.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* {Logo} */}
        <a href='#'>
          <img src={Logo} alt='logo' style={{ width: '150px', height: 'auto' }} />
        </a>
        {/* {Button} */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
