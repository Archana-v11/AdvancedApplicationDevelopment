import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        
    <div>
        <div className='footer-content'>
        <br/><br/>
        <h3>Follow Us</h3><br/>
        <div className='sociallink'>
        <a href='https://www.facebook.com/profile.php?id=100091308641475'><span className='sicon'><AiIcons.AiFillFacebook/></span></a>
        <Link to='https://www.instagram.com/archana.v11/'><span className='sicon'><BsIcons.BsInstagram/></span></Link>
        <Link to='https://www.linkedin.com/in/archana-v-456278227/'><span className='sicon'><AiIcons.AiOutlineLinkedin/></span></Link>
        <Link to='https://twitter.com/'><span className='sicon'><BsIcons.BsTwitter/></span></Link>
        <Link to='https://www.youtube.com/'><span className='sicon'><BsIcons.BsYoutube/></span></Link>
        </div>
        </div>
       
        <div className='copyright'>
          <p>Copright 2023 Online Tutorials.All rights reserved</p>
       </div>
       </div>
    )
}