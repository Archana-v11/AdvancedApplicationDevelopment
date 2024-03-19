import React from "react";
import '../assets/css/Dashboard.css';

import Sidebar from "./Sidebar";


export default function Dashboard() {
  return (
    <div className="userinfo">
    <Sidebar/>
    
    <div class="app-container">
    <h2>WEBSITE OVERVIEW:</h2><br/><br/>
    <div id="wrap">
      <div id="bar">
        <h3 id="box">
          Events Booked
          <h4>400</h4>
        </h3>
        <br />
        <h3 id="box">Total Employee<h4>85</h4></h3>
        <br />
        <h3 id="box">
          Today's Booking<h4>120</h4>
        </h3>
      
        <h3 id="box">
          Today's Earning<h4>62,000</h4>
        </h3>
      </div>
      </div>

<br/><br/>

<div class="app-view">

<br/><br/><br/><br/><br/><br/><br/><br/>
<main class="content">
  <br/><br/><br/>
  <h1>Most &nbsp;&nbsp;Recent&nbsp;&nbsp; Event &nbsp;&nbsp;Reservations:</h1>
  <table className="dash_table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Package</th>
        <th>Location</th>
        
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          Archana
        </td>
        <td>archana@example.com</td>
        <td>7358991516</td>
        <td>Platinum</td>
        <td>Coimbatore</td>

       
      </tr>
      <tr>
        <td>
          Dhrisha
        </td>
        <td>dhrisha@example.com</td>
        <td>987654321</td>
        <td>Diamond</td>
        <td>Kerala</td>
        
        
      </tr>
      <tr>
        <td>
         Harish Kumar 
        </td>
        <td>harish@example.com</td>
        <td>98762123456</td>
        <td>Gold</td>
        <td>Tirnelveli</td>
        
        
      </tr>
      <tr>
        <td>
          Indhu
        </td>
        <td>indhu@example.com</td>
        <td>9876212345</td>
        <td>Silver</td>
        <td>Ondipudhur</td>
        
        
      </tr>
      <tr>
        <td>
          Inika
        </td>
        <td>inika@example.com</td>
        <td>9873453456</td>
        <td>Diamond</td>
        <td>Dharmapuri</td>
        
        
      </tr>
      <tr>
        <td>
          Akshaya 
        </td>
        <td>akshaya@example.com</td>
        <td>98762123456</td>
        <td>Gold</td>
        <td>Erode</td>
        
        
      </tr>
    </tbody>
  </table>
</main>

  </div>

</div>
</div>
  );
}
