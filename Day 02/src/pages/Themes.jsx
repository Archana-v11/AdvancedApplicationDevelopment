import React from "react"

import '../assets/css/Theme.css';
import Navbar from "./Navbar";


export default function Themes() {
  return (
    <div>
    
    <section className="theme_full">
    <div className="theme_head">
     
     <br/> <br/> <br/> <br/>
    <h1>OUR BEST-BIRTHDAY THEMES</h1>
    <br/><br/>
    <h2>Surprise your loved ones on their birthday with beautiful decorations, get creative with our guide <br/>to the most 
    popular kids’ party ideas and themes.</h2>
     </div>
   <div className="theme_cont">
   <div className="theme_card">
     <img src="https://makemyevent.in/wp-content/uploads/2018/10/2d.jpg"/>
     <div className="theme_content">
     <h3>2D THEMES</h3>
     <p>We provide high-quality 2D Themes for 
     all Birthday Party needs. We have varieties of 2D themes for kids, girls and boys and also have concept based themes to make your birthday party decorations unique and customized.
     </p>
     </div>
   </div>
   <div className="theme_card">
     <img src="https://makemyevent.in/wp-content/uploads/2018/10/3d.jpg"/>
     <div className="theme_content">
     <h3>3D THEMES</h3>
     <p>Why just celebrate in a simple way, do it in a very dreamful way and plan it by your way. 
      the. We organise your Birthday Party in the cutest styles and themes to make it memorable for your child and for you.
     </p>
     </div>
   </div>
   <div className="theme_card">
     <img src="https://makemyevent.in/wp-content/uploads/2018/10/baloon.jpg"/>
     <div className="theme_content">
     <h3>BALLON THEMES</h3>
     <p>We offer a wide range of balloon decorations for Birthday Parties. We can design the balloon themes as per your choice. Our balloon decorations include balloon arches, balloon 
     twisters, balloon walls and many more.</p>
     </div>
   </div>
   </div>
    
    </section>
    </div>
    )
  }