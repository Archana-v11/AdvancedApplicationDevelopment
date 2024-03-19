import React from "react"
import Carousel from "./Carousel";
import '../assets/css/Silver.css';
import Navbar from "./Navbar";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Diamond()
{
    const images = [
        'https://cityfurnish.com/blog/wp-content/uploads/2023/05/happy-birthday-sofa-with-baby-min-1200x869.jpg',
        'https://m.media-amazon.com/images/I/81Z8ONHF8CL._AC_UF350,350_QL80_.jpg',
        'https://www.gharjunction.com/img/blog/275.jpg',
        'https://s3.cloud.ngn.com.tr/kitantik/images/2022-07-20/1br9qfyl5sovicu1u5u.jpg',
        'https://www.togetherv.com/blog/wp-content/uploads/2021/04/minnie-mouse-theme-birthday-decor_1.jpg',
        'https://static.wixstatic.com/media/4946c1_b0b45242f7a44bc394414d7476150f9d~mv2.jpg/v1/fill/w_640,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4946c1_b0b45242f7a44bc394414d7476150f9d~mv2.jpg'

      ];
    return(
        <div>
        <Navbar/>
        <div class="container">
<br/><br/><br/><br/>
    <h1 class="heading">DIAMOND PACKAGES</h1>

    <div class="box-container">

        <div class="box">
        <h3 >Birthday Decoration & Activities - Diamond<br/>Rs.17,999</h3>
            <img src="https://www.7eventzz.com/public/media/original-images/1644230116_2.jpg" alt=""/>
            <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
        <ul id="packageList" >
        <br/>
        <li>1 Entrance Gate with frills/Ballons Twisting/Structure,Party Area Decor(600 Qty)+He Gas Ballons</li>
        <li>Ballon Gate Decoration,1 Happy Birthday banner,6 Rental Cut outs as per Theme</li>
        <li>Either a Big Ballon filled with Confetti or Party poppers</li>
        <li>Return gift table decor with single arch</li>
        <li>Birthday Supplies:Birthday Caps,Eye Masks,Hooters(25 - 30)</li>
        <li>Birthday Activity:Choose One-Enther Magic Show or puppet show(45 mins- 1 hr)</li>
        </ul>

        <a href="/booking" class="btn">Book Now</a>
        </div>

        <div class="box">
        <h3>Birthday Theme Decoration - Diamond One<br/>Rs.22,999</h3>
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/3/WZ/YX/WO/142579589/mickey-mouse-theme-birthday-decoration.jpg" alt=""/>
            <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
<ul id="packageList" >
<br/>
    <li>Center Table Gate with frills/Entrance Gate with frills/Ballons Twisting</li>
    <li>Cake Table Decoration with double He Gas arch/4 ballon column</li>
    <li>12 rent Cut outs as per Theme,6 Ballon Pillars with Ballon Arch based on theme</li>
    <li>Backdrop as per theme 10/8 ft size</li>
    <li>Birthday Activity:Tatoo Artist,Magic Show,Nail Art/Hair Beading/Hoopla</li>
</ul>

            <a href="/booking" class="btn">Book Now</a>
        </div>

        <div class="box">
        <h3>Birthday Theme Decoration - Diamond Plus<br/>Rs.30,999</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmCrAQR27Cu08Od6pSXudTuD8cBTGjGUH8NCug4FAzl6k6JAzBL16M41b6-raM9m0ueI&usqp=CAU" alt=""/>
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