import React from "react";
import '../assets/css/Home.css';
import Navbar from "./Navbar";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Packages()
{
    return(
        <div>
        <Navbar/>
        <br/><br/><br/><br/>
        <section className="package">
    <h1>PACKAGES</h1><br/>
    <div className="pack">
        <div class="package">
           <Link to="/silver"> <img src="https://vipshisha.co.uk/wp-content/uploads/2017/06/silver.png" alt="Silver Package"/> </Link>
            <span class="price">Rs.8999</span>
        </div>
        <div class="package">
        <Link to='/gold'>   <img src="https://145953383.cdn6.editmysite.com/uploads/1/4/5/9/145953383/s953155076902872743_p3_i1_w225.png" alt="Gold Package"/> </Link>
            <span class="price">Rs.12,499</span>
        </div>
        <div class="package">
        <Link to='/diamond'>    <img src="https://goenkart.com/wp-content/uploads/2020/11/Diamond-Package-700x700.jpg" alt="Diamond Package"/> </Link>
            <span class="price">Rs.19,999</span>
        </div>
        <div class="package">
        <Link to='/platinum'>   <img src="https://goenkart.com/wp-content/uploads/2020/11/platinumpackageky-700x700.jpg" alt="Platinum Package"/> </Link> 
            <span class="price">Rs.42,999</span>
        </div>
    </div>
    <br/><br/>
</section>


</div>
    )
}