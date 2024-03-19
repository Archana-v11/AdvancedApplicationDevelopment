import React from "react";
import '../assets/css/Billing.css';
import { Button } from "@mui/material";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
export default function Billing(){
    const [value, setValue] = React.useState();
  
  const handleChange = (event) => {
 
    setValue(event.target.value);
 
  };
  const msg=()=>
  {
    alert("Payment Succesfull");
  }
    return(
        <div>
        <Navbar/>
        <div id="homebodyc2">
      <div id="layerh2">
        
        <div id='bill12'>
        <div id='bill-container12'>
        <div id='billform12'>
        <div id='billhead12'>
        <h1>BILLING</h1>
        </div>
       
        <br/>
        
        <label>
        PAYMENT TYPE : 
        <select value={value} onChange={handleChange}>
        <option value="cash">cash</option>
        <option value="card">card</option>
        </select>
        </label>
        <br/>
        <label>AMOUNT : <input  id="inputbilling" type="number" placeholder="amount"/>
        </label>
        <br/>
        <br/>
        <Button id='list12'>
        <div id='button1' onClick={msg}>
        Pay
        </div>
        
       <Link to='/service'> <div id='button2' >
        Cancel
        </div></Link>
        </Button>
       
        </div>
        </div>
        </div>
       

       
      </div>
      
    </div>
    </div>
    )
}