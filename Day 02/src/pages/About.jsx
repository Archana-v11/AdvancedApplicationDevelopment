import React from "react"

import '../assets/css/About.css';
import Navbar from "./Navbar";


export default function About() {
  return (
    <div>

    <Navbar/>
    <section className="hero">
    <div className="heading">
    <br/><br/><br/>
     <h1>ABOUT US</h1>
     </div>
     <div className="cont">
       <div className="hero-content">
       <h2>Make your loved one's Bithday special!</h2>
       <p>An online birthday event management system is a comprehensive platform designed to streamline 
       the entire process of planning, organizing, and executing birthday 
       celebrations in both physical and virtual environments. 
       These systems offer a wide range of features and tools to assist
        users in every aspect of event management.</p>


       </div>
       <div className="hero-image">
          <img src="https://media.istockphoto.com/id/1380516073/photo/female-party-planner-arranging-decorations-for-a-child-birthday-party.jpg?s=612x612&w=0&k=20&c=7LWTCxgrl-8VmX8J0YToQU69_HJeBhj47ufevbxQtFU="/>
       </div>
     </div>
    </section>
    </div>
    )
  }