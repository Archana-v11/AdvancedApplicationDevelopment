import "../assets/css/Home.css";

import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Themes from "./Themes";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import Packages from "./Packages";
import Contact from "./Contact";
import Service from "./Service";
import Cards from "./Cards";
import About from "./About";
function Home()
{
    const images = [
        'https://www.aicaevents.com/wp-content/uploads/2020/09/Garden_birthday_party_decoration_by_aicaevents_TPG1closeup.jpg',
        'https://1.bp.blogspot.com/-vprJkno-ytg/VLoAX8DmDII/AAAAAAAAFnU/fKLeWKWUoWY/s1600/1(1).jpg',
        'https://borntoparty.in/img/slider/2.png',
        'https://alankaran.com/wp-content/uploads/2020/01/Alankaran-Birthday-Party-Ideas-Hyderabad.jpg',
        'https://www.fnp.com/images/pr/m/v20191219131848/rose-gold-birthday-theme-balloon-decor-with-led.jpg',
        'https://images.meesho.com/images/products/126611990/gqiem_512.webp'

      ];
    return (
        <div>
        <Navbar/>
        <div>
        <section className='background1'>
        
    <br/><br/><br/><br/>
    <h1 className='home_h1'>Bliss Bay</h1><br/><br/>
    <h2 className='home_h2' >Life is a collection of moments.<br/> Let us help you make your birthdays unforgettable.</h2><br/>
    <h3 className="home_h3">It's time to Celebrate    ...</h3><br/>
    <Link to='/packages'><button type="homesubmit">Book Your Package..</button></Link>
    
  
    </section>

    {/**About Section */}
    <section>
    <About/>
    </section>

    {/**Image Section */}
   <section className="sec_img">
   <div className="home_img">
      <h2>Plan a Memorable Birthday!</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h2>Stress Free!</h2>
   </div>
   </section>
    
    {/*Package section*/}
    <section>
    <Packages/>
    </section>
    <br/>
    {/*cards-themes*/}
    
    <section>
    <Cards/>
    </section>
    
    {/*carousel*/}
    <br/><br/>
    <div className='home-container'>
    <h1>Our Gallery</h1><br/>
    <h2>These are come pictures which gives you better ideas to understand
    about your kids birthday party as per theme nased for your boys and girls party...</h2><br/>
    <Carousel images={images}/>  
    </div>

   
   {/*Themes*/}
    <section>
    <Themes/>
    </section>


   {/*footer*/}
    <footer>
    
    <div className='footer-content'>
    
    <h3>Follow Us</h3><br/>
    <div className='social-link'>
    <a href='https://www.facebook.com/profile.php?id=100091308641475'><span className='si_con'><AiIcons.AiFillFacebook/></span></a>
    <Link to='https://www.instagram.com/archana.v11/'><span className='si_con'><BsIcons.BsInstagram/></span></Link>
    <Link to='https://www.linkedin.com/in/archana-v-456278227/'><span className='si_con'><AiIcons.AiOutlineLinkedin/></span></Link>
    <Link to='https://twitter.com/'><span className='si_con'><BsIcons.BsTwitter/></span></Link>
    <Link to='https://www.youtube.com/'><span className='si_con'><BsIcons.BsYoutube/></span></Link>
    </div>
    </div>
    </footer>
    <div className='copyright'>
    <p><a href="/terms">Terms & Conditions</a></p>
      <p>Copright 2023 Online Tutorials.All rights reserved</p>
   </div>
    </div>
    </div>
    
    )
}
export default Home
