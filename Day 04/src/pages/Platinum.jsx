import React from "react"
import Carousel from "./Carousel";
import '../assets/css/Silver.css';
import Navbar from "./Navbar";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Platinum()
{
    const images = [
        'https://cdn.shopify.com/s/files/1/0266/9497/5657/files/rose-gold-pastel-balloon-kit-for-birthday-decoration-pack-of-88-pcs-diy-kit-114833_480x480.jpg',
        'https://venyou4u.in/wp-content/uploads/2022/08/elegant-balloon-decor4.jpg',
        'https://m.media-amazon.com/images/I/81TUKoMXNOL._AC_UF1000,1000_QL80_.jpg',
        'https://s3.cloud.ngn.com.tr/kitantik/images/2022-07-20/1br9qfyl5sovicu1u5u.jpg',
        'https://m.media-amazon.com/images/I/711-egjV7ZL._AC_UF1000,1000_QL80_.jpg',
        'https://prepare2party.in/wp-content/uploads/2022/06/CANOPY-TENT-DECOR-2-1080x1080.jpeg'

      ];
    return(
        <div>
        <Navbar/>
        <div class="container">
<br/><br/><br/><br/>
    <h1 class="heading">PLATINUM PACKAGES</h1>

    <div class="box-container">

        <div class="box">
        <h3 >Birthday Theme Decoration - Platinum<br/>Rs.34,999</h3>
            <img src="https://m.media-amazon.com/images/I/81gileqqDWL._AC_UF894,1000_QL80_.jpg" alt=""/><br/>
            <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
        <ul id="packageList" >
        <br/>
        <li>1 Entrance As per theme+Pathway(Double Arch Design/Theme based ballons structure+Ballons Twisting work)</li>
        <li>Party Area Decor(Ballons 1200 Qty),Cake Table Decoration/SDS Ballon Web Design</li>
        <li>Theme based foil ballons on top of eack columns(8 Qty)</li>
        <li>Return gift table decor with single arch</li>
        <li>Photo Booth-As per theme+props Station,LED Lights 10 Qty</li>
        <li>Birthday Supplies:Birthday Caps,Eye Masks,Hooters(25 - 30)</li>
        <li>Birthday Activity:Choose One-Enther Magic Show or puppet show(45 mins- 1 hr)</li>
        </ul>

        <a href="/booking" class="btn">Book Now</a>
        </div>

        
        <div class="box">
        <h3>Birthday Theme Decoration - Platinum Plus<br/>Rs.49,999</h3>
        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/birthday-combo/c/j/u/masha-theme-teddy-bear-happy-birthday-decoration-hbd-61-party-original-imagqycmgs96u8yw.jpeg?q=20&crop=false" alt=""/><br/>
        <button type="button" id="toggleButton" class="sil_btn">Package Details</button>
        <ul id="packageList" >
        <br/>
            <li>Center Pieces/Guest Table/Round Table Decor (Foil Ballons As per theme/Paper Craft work|12 Qty)</li>
            <li>Led Lights 10 Qty,Wishing Board --1 , Still Photographer</li>
            <li>Return Gift Table Decor , Happy Birthday Board, Blessing Board</li>
            <li>Cut Outs 3D quality as per theme (12 Qty)</li>
            <li>Birthday Activity:Either Magic Show or puppet show or Nail Art/Hair Beading or Caricature artist</li>
            <li>Birthday Activity:Either Game Co-ordinator or Ballon Art or Jumping Bouncy or Slide Bouncy</li>
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