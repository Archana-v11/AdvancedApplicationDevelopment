import React from "react";
import '../assets/css/Sidebar.css'
import { Link } from "react-router-dom";


export default function Sidebar(){
    return(
        <div className="side_bar">
            <h2>BLISS BAY</h2>
            <ul className="side">
              <li className="li_side"><Link to="/admin/dashboard"><span className='i_con'></span>Dashboard</Link></li>
              <li className="li_side"><Link to="/admin/user"><span className='i_con'></span>User Info</Link></li>
              <li className="li_side"><Link to="/cards"><span className='i_con'></span>Themes</Link></li>
              <li className="li_side"><Link to="/login"><span className='i_con'></span>Logout</Link></li>
              
            </ul>
          </div>
    )
}