/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//logo
import Logo from '../assets/Logo.png';

const Footer = () => {

    return (
      <footer className=" bg-black/50  py-10 mt-20">
  
  <div className="container mx-auto px-4">

{/* Footer top */}
<div className="flex justify-between">
  
  {/* Footer logo */}
  <div>
    <img src={Logo} alt="Logo" className="h-7" style={{ width: '100px', height: 'auto' }} />
  </div>

  {/* Social icons */}
  <div className="flex space-x-4">
    <a href="#">
      <svg className="h-6 w-6 text-gray-400 hover:text-white"></svg> 
    </a>

    <a href="#">
      <svg className="h-6 w-6 text-gray-400 hover:text-white"></svg>
    </a>
  </div>

</div>

{/* Footer bottom */}
<div className="mt-6 flex justify-between items-center text-gray-400">

  {/* Copyright */}  
  <p className="text-sm">
    &copy; 2022 MyWebsite
  </p>

  {/* Menu */}
  <nav className="text-sm">
    <ul className="flex space-x-6">
      <li><a href="#">About</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Privacy</a></li>
    </ul>
  </nav>

</div>

</div>
      </footer>
    )
  
  };
  

export default Footer;
