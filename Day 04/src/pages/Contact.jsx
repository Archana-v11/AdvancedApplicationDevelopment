import React, { useState } from 'react';
import '../assets/css/Contact.css'
import Navbar from "./Navbar";
import Footer from './Footer';



export default function Contact() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  return (
    <div>
     <Navbar/>
    
      <div className="contactfull">
        <form>
          <h1>Contact Us Form</h1>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            required
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            required
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            id="mobile"
            placeholder="Mobile Number"
            value={mobileno}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <h4>Type Your Message Here...</h4>
          <textarea
            type="text"
            name=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input type="submit" value="Send" id="contact_button" />
        </form>
      </div>

      
   <Footer/>
    </div>
  );
}