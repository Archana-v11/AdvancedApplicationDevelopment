import React from "react";
import Service from "./Service";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import Navbar from "./Navbar";
export default function Decoration(){
    return(
        
        <section>
        <Navbar/><br/><br/><br/><br/>
        <Service/>
        <Service2/>
        <Service3/>
        <Service4/>
        <Service5/>
        </section>

       
        
       
    )
}