import React from "react";
import '../assets/css/Userinfo.css'
import Sidebar from "./Sidebar";

export default function Userinfo(){
    
    return(
        <div className="userinfo">
        <Sidebar/>
        <div class="app-container">
  
  
  
  <div class="app-view">
   
    
    <main class="content">
      <br/><br/><br/>
      <h1>Information of Recently Registered Individuals:</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th>Confirm Password</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Archana
            </td>
            <td>archana@example.com</td>
            <td>7358991516</td>
            <td>1108</td>
            <td>1108</td>

            <td>
              <button class="btn">Edit</button>
              <button class="btn btn-delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              Dhrisha
            </td>
            <td>dhrisha@example.com</td>
            <td>987654321</td>
            <td>dhris24</td>
            <td>dhris24</td>
            
            <td>
              <button class="btn">Edit</button>
              <button class="btn btn-delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>
             Harish Kumar 
            </td>
            <td>harish@example.com</td>
            <td>98762123456</td>
            <td>123</td>
            <td>123</td>
            
            <td>
              <button class="btn">Edit</button>
              <button class="btn btn-delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              Indhu
            </td>
            <td>indhu@example.com</td>
            <td>98762123456</td>
            <td>123@</td>
            <td>123@</td>
            
            <td>
              <button class="btn">Edit</button>
              <button class="btn btn-delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              Inika
            </td>
            <td>inika@example.com</td>
            <td>9873453456</td>
            <td>inika12</td>
            <td>inika12</td>
            
            <td>
              <button class="btn">Edit</button>
              <button class="btn btn-delete">Delete</button>
            </td>
          </tr>
          <tr>
            <td>
              Akshaya 
            </td>
            <td>akshaya@example.com</td>
            <td>98762123456</td>
            <td>aksh</td>
            <td>aksh</td>
            
            <td>
              <button class="btn">Edit</button>
              <button class="btn btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    
  </div>
  
</div>
</div>
    )
}