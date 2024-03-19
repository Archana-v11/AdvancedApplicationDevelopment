import React ,{useState}from "react";
import '../assets/css/Booking.css'
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
export default function Booking(){
    const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform any form submission logic
    // For demonstration purposes, we'll just set submitted to true
    setSubmitted(true);
  };
    return(
        <div>
        <Navbar/><br/><br/><br/>
        <div className="book">
        <section class="conta">
      <header>Party Booking Form</header>
      <h2>"Please complete the party booking form below to reserve your spot and ensure a memorable celebration!"</h2><br/>
      <form onSubmit={handleSubmit} action="#" class="form">
        <div class="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div class="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>
        <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div class="input-box">
            <label>Event Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
          <div class="input-box"> 
          <div class="select-box">
          <label>Select your preferred package</label>
              <select>
                <option hidden>Package</option>
                <option>Silver</option>
                <option>Gold</option>
                <option>Diamond</option>
                <option>Platinum</option>
              </select>
            </div>
        </div>
        </div>
        <div class="input-box">
          <div class="select-box">
          <label>Choose the age of the birthday person</label>
          <select>
            <option hidden>Age</option>
            <option>1-5</option>
            <option>5-10</option>
            <option>10-15</option>
            <option>15-20</option>
            <option>20+</option>
          </select>
        </div>
          </div>
        <div class="gender-box">
          <h3>Gender</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="gender" checked />
              <label for="check-male">Male</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Female</label>
            </div>
            <div class="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">prefer not to say</label>
            </div>
          </div>
        </div>
        <div class="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
          
          
          <div class="column">
            <br/>
            <label>Location</label>
            <input type="text" placeholder="Enter your location/District/City" required />
          </div>
        </div>
       <Link to='/success'><button type="submit" className="book_btn">Submit</button></Link> 
      </form>
      
    </section>
    </div>
   
    </div>
    
    )
}