import React from "react"
import Carousel from "./Carousel";
import '../assets/css/Silver.css';
import Navbar from "./Navbar";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Gold()
{
    const images = [
        'https://jolevents.in/cdn/shop/collections/Birthday_surprise_room_decoration_at_home40.png?v=1677494008&width=750',
        'https://media.licdn.com/dms/image/D4D12AQGzWnzcBGfH-Q/article-cover_image-shrink_720_1280/0/1690791328591?e=2147483647&v=beta&t=fGDWcIrrToThYXxhc-KoihTcwMaqGn-oYZ-KYDv33Fg',
        'https://i.pinimg.com/736x/6c/63/f3/6c63f3cafd6a12ecd080714ded695bae.jpg',
        'https://static.vecteezy.com/system/resources/previews/031/350/765/large_2x/festive-birthday-party-decorations-on-table-with-cake-present-boxes-and-balloons-on-pastel-color-concept-by-ai-generated-free-photo.jpg',
        'https://m.media-amazon.com/images/I/71BGptXpEBL.jpg',
        'https://i.pinimg.com/736x/29/8d/e5/298de5a44bab39ed7d9c079134816aa3.jpg'

      ];
    return(
        <div>
        <Navbar/>
        <div class="container">
<br/><br/><br/><br/>
    <h1 class="heading">GOLD PACKAGES</h1>

    <div class="box-container">

        <div class="box">
        <h3 >Birthday Decoration & Activities - Gold<br/>Rs.10,999</h3>
            <img src="https://i.pinimg.com/originals/ac/8b/13/ac8b13c9405254c3ccff989b106036f1.jpg" alt=""/>
            <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
        <ul id="packageList" >
        <br/>
        <li>400 Balloons-Combination of Mettalic Ballons,Polka Dot Ballons</li>
        <li>Ballon Gate Decoration,1 Happy Birthday banner,3 Rental Cut outs as per Theme</li>
        <li>Either a Big Ballon filled with Confetti or Party poppers</li>
        <li>Birthday Supplies:Birthday Caps,Eye Masks,Hooters(20 - 25)</li>
        <li>Birthday Activity:Choose One-Enther Magic Show or puppet show(45 mins- 1 hr)</li>
        </ul>

        <a href="/booking" class="btn">Book Now</a>
        </div>

        <div class="box">
        <h3>Birthday Theme Decoration - Gold One<br/>Rs.14,999</h3>
            <img src="https://i.ebayimg.com/00/s/MTIwMFgxMjAw/z/UMcAAOSwvVRhQrRV/$_12.JPG?set_id=880000500F" alt=""/>
            <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
<ul id="packageList" >
<br/>
    <li>Entrance Gate with frills/Ballons Twisting</li>
    <li>Cake Table Decoration with double arch/4 ballon column</li>
    <li>6 rent Cut outs as per Theme,6 Ballon Pillars with Ballon Arch based on theme</li>
    <li>Happy Birthday Board on ballons columm,Happy Birthday Board</li>
    <li>Birthday Activity:Tatoo Artist,Magic Show,Nail Art/Hair Beading/Hoopla</li>
</ul>

            <a href="/booking" class="btn">Book Now</a>
        </div>

        <div class="box">
        <h3>Birthday Theme Decoration - Gold Plus<br/>Rs.17,999</h3>
        <img src="https://cdn.shopify.com/s/files/1/0266/9497/5657/files/rose-gold-pastel-balloon-kit-for-birthday-decoration-pack-of-88-pcs-diy-kit-114833_480x480.jpg" alt=""/>
        <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
        <ul id="packageList" >
        <br/>
            <li>1 Entrance gate with frills/Ballons twisting/structure,party Area decor(600 Qty)+80 He Gas Ballons</li>
            <li>Center Table Decor(10 round table,3 gas ballon),He Gas Arch Ballons Arch</li>
            <li>Return Gift Table Decor with single arch/two ballons column with gas arch</li>
            <li>Happy Birthday Banner on Gate,Wishing Board</li>
            <li>Birthday Supplies:Tatto Artist Glitter,Birthday Caps(Theme based),Eye Masks(25 - 30)</li>
        </ul>
        
                    <a href="/booking" class="btn">Book Now</a>
        </div>

        

        

        

    </div>

        {/*carousel*/}
        <br/><br/>
        <div className='home-container'>
        <h1>Our Gallery</h1><br/>
        <h2>These are come pictures which gives you better ideas to understand
        about your kids birthday party as per theme nased for your boys and girls party...</h2><br/>
        <Carousel images={images}/>  
        </div>

        {/*footer*/}
    <footer>
    
    <div className='footer-content'>
    <br/><br/>
    <h3>Follow Us</h3><br/>
    <div className='sociallink'>
    <a href='https://www.facebook.com/profile.php?id=100091308641475'><span className='sicon'><AiIcons.AiFillFacebook/></span></a>
    <Link to='https://www.instagram.com/archana.v11/'><span className='sicon'><BsIcons.BsInstagram/></span></Link>
    <Link to='https://www.linkedin.com/in/archana-v-456278227/'><span className='sicon'><AiIcons.AiOutlineLinkedin/></span></Link>
    <Link to='https://twitter.com/'><span className='sicon'><BsIcons.BsTwitter/></span></Link>
    <Link to='https://www.youtube.com/'><span className='sicon'><BsIcons.BsYoutube/></span></Link>
    </div>
    </div>
    </footer>
    <div className='copyright'>
      <p>Copright 2023 Online Tutorials.All rights reserved</p>
   </div>

</div>
</div>
    )
}