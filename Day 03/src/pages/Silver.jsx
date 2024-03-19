import React from "react"
import Carousel from "./Carousel";
import '../assets/css/Silver.css';
import Navbar from "./Navbar";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Silver()
{
    const images = [
        'https://rukminim2.flixcart.com/image/850/1000/l3dcl8w0/birthday-combo/3/a/h/happy-birthday-decoration-items-boys-girls-husband-hbd-34-party-original-imagegkpkyg3zywe.jpeg?q=20&crop=false',
        'https://fabdecorations.in/wp-content/uploads/2019/12/WhatsApp-Image-2019-07-28-at-5.59.04-PM-1024x1024.jpeg',
        'https://t4.ftcdn.net/jpg/05/94/54/63/360_F_594546363_znzFvNFiXplL2P2JY0PQhdTra606rUlk.jpg',
        'https://static.vecteezy.com/system/resources/previews/031/350/765/large_2x/festive-birthday-party-decorations-on-table-with-cake-present-boxes-and-balloons-on-pastel-color-concept-by-ai-generated-free-photo.jpg',
        'https://m.media-amazon.com/images/I/71BGptXpEBL.jpg',
        'https://rukminim2.flixcart.com/image/828/828/xif0q/birthday-combo/t/9/o/birthday-decoration-combo-for-birthday-decoration-of-boys-girl-original-imaggqa2fy5vkfzx.jpeg?q=60&crop=false'

      ];
    return(
        <div>
        <Navbar/>
        <div class="container">
<br/><br/><br/><br/>
    <h1 class="heading">SILVER PACKAGES</h1>

    <div class="box-container">

        <div class="box">
        <h3 >Simple Bithday-Decoration<br/>Rs.1,999</h3>
            <img src="https://d12w0o72bw9xzs.cloudfront.net/2w7fdaswmtc1yw06wmk6kkctx3pb" alt=""/>
            <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
<ul id="packageList" >
<br/>
    <li>400 Balloons with Ribbons</li>
    <li>Either a Big Balloon or Party Popper</li>
    <li>Happy Birthday Banner</li>
    <li>10 Hanging Pictures of baby</li>
</ul>

            <a href="/booking" class="btn">Book Now</a>
        </div>

        <div class="box">
        <h3>Birthday Ballon & Decoration-Party<br/>Rs.2,999</h3>
            <img src="https://s3.envato.com/files/457021863/uju_014.jpg" alt=""/>
            <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
<ul id="packageList" >
<br/>
    <li>500 Balloons with Ribbons</li>
    <li>3 Ballon Bunches at entrance or cake table</li>
    <li>Happy Birthday Banner</li>
    <li>20 Hanging Pictures of baby</li>
    <li>1 Big Ballon or Party Popper</li>
</ul>

            <a href="/booking" class="btn">Book Now</a>
        </div>

        <div class="box">
        <h3>Birthday Decoration & Birthday Party<br/>Rs.3,999</h3>
        <img src="https://m.media-amazon.com/images/I/71nCj1QHakL._AC_UF1000,1000_QL80_.jpg" alt=""/>
        <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
        <ul id="packageList" >
        <br/>
            <li>Ballon Gate Decoration</li>
            <li>250 Ballon with ribbons</li>
            <li>Cake Table Decoration</li>
            <li>Happy Birthday Banner</li>
            <li>Party Popper</li>
        </ul>
        
                    <a href="/booking" class="btn">Book Now</a>
        </div>

        <div class="box">
        <h3>Birthday Decoration & Activity - Silver Package<br/>Rs.5,999</h3>
        <img src="https://rukminim1.flixcart.com/image/850/1000/xif0q/birthday-combo/9/r/b/black-golden-and-silver-birthday-theme-for-girls-boys-wife-original-imagkvgzzm3eggvf.jpeg?q=20" alt=""/>
        <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
        <ul id="packageList" >
        <br/>
            <li>Ballons at entrance with frills as per theme . Ballon in party area decor</li>
            <li>Cake Table Decorations . Happy Birthday board with ballons column</li>
            <li>Birthday Caps,Hooter,Eye Mask as per 20 kids</li>
            <li>Party poppers,Knife Musical,Birthday Candle.</li>
        </ul>
        
                    <a href="/booking" class="btn">Book Now</a>
        </div>

        <div class="box">
        <h3>Birthday Decoration & Activity - Silver One<br/>Rs.6,999</h3>
        <img src="https://m.media-amazon.com/images/I/715CrYwWH0L._AC_UF894,1000_QL80_.jpg" alt=""/>
        <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
<ul id="packageList" >
<br/>
    <li>Ballon Entrance with frills . Party Area Decor</li>
    <li>Cake Table Decorations . Happy birthday Board on ballons column</li>
    <li>Party popper,Khoi Bag,Loot Bag as per 20 Kids</li>
    <li>Magic Show or Puppet Show (45 mins - 1 hr)</li>
</ul>

            <a href="/booking" class="btn">Book Now</a>
        </div>

        <div class="box">
        <h3>Birthday Decoration & Activity - Silver Plus<br/>Rs.8,499</h3>
        <img src="https://t4.ftcdn.net/jpg/05/91/44/35/360_F_591443520_DyVN5jAvOWRa5vyhddKQjfMGMiEQ5w92.jpg" alt=""/>
        <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
        <ul id="packageList" >
        <br/>
            <li>300 Ballons - Combination of Metallic Ballon,Polka Dot Ballons with Ribbons</li>
            <li>Ballon Entrance Gate Decoration,Cake Table Decoration</li>
            <li>Birthday Party Supplies:Birthday Caps,Eye Masks,Hooters(20 to 25)</li>
            <li>Choose One:Magic Show or puppet show or Game Co-ordinator</li>
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