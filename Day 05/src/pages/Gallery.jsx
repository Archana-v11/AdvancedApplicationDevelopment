import React from "react";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Gallery(){
    const images = [
        'https://www.aicaevents.com/wp-content/uploads/2020/09/Garden_birthday_party_decoration_by_aicaevents_TPG1closeup.jpg',
        'https://1.bp.blogspot.com/-vprJkno-ytg/VLoAX8DmDII/AAAAAAAAFnU/fKLeWKWUoWY/s1600/1(1).jpg',
        'https://borntoparty.in/img/slider/2.png',
        'https://alankaran.com/wp-content/uploads/2020/01/Alankaran-Birthday-Party-Ideas-Hyderabad.jpg',
        'https://www.fnp.com/images/pr/m/v20191219131848/rose-gold-birthday-theme-balloon-decor-with-led.jpg',
        'https://images.meesho.com/images/products/126611990/gqiem_512.webp'

      ];
    return(
        <div>
        <Navbar/>
        <div className='home-container'><br/><br/><br/><br/>
    <h1>Our Gallery</h1><br/>
    <h2>These are come pictures which gives you better ideas to understand
    about your kids birthday party as per theme nased for your boys and girls party...</h2><br/>
    <Carousel images={images}/>  
    </div>
    <Footer/>
    </div>
    
    )
}