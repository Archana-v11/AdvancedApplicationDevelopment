import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as VscIcons from "react-icons/vsc";

import '../assets/css/Navbar.css';

export default function Navbar() {
  return (
    <div className='full_sidebar'>
      <div className="navbar">
        <div className="nav1">
          <ul className='nav_ul'>
            <li className='nav_li'><Link to='/'>HOME</Link></li>
            <li className='nav_li'><Link to='/packages'>PACKAGES</Link></li>
            <li className='nav_li'><Link to='/decor'>SERVICES</Link></li>
            <li className='nav_li'><Link to='/gallery'>GALLERY</Link></li>
            <li className='nav_li'><Link to='/about'>ABOUT</Link></li>
            <li className='nav_li'><Link to='/contact'>CONTACT US</Link></li>
            <li className='nav_li'><Link to='/login'>LOGOUT</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
