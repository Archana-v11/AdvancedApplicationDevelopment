import React from "react";
import '../assets/css/Cards.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
export default function Cards() {
  return (
    <div >
    <br/>
    <h1 style={{textAlign: "center", fontSize: "32px"}}>BIRTHDAY THEMES...</h1><br/>

      <section className="hero-section">
      
      
      <div className="card-grid">
        <a className="card" href="#">
        <Link to='/service'>  <div className="card__background" 
          style={{backgroundImage: "url(https://specialyou.in/cdn/shop/files/81CcAxrMLlL._SL1500.jpg?v=1689578580&width=2048)"}}></div></Link>
          <div className="card__content"><br/><br/>
          <h3 className="card__heading">1 Year</h3><br/>
          <h2 className="card__category">Tiny toes, endless joy – happy 1st birthday!</h2>
            
          </div>
        </a>
        <a className="card" href="#">
        <Link to='/service'>  <div className="card__background" style={{backgroundImage: "url(https://m.media-amazon.com/images/I/71-55yYtexL._AC_UF1000,1000_QL80_.jpg)"}}></div> </Link>
          <div className="card__content"><br/><br/>
          <h3 className="card__heading">2 - 15 Years</h3><br/>
          <h2 className="card__category">It's Time for superhero plays!</h2>
          </div>
        </a>
        <a className="card" href="#">
        <Link to='/service'>   <div className="card__background" style={{backgroundImage: "url(https://media.karousell.com/media/photos/products/2020/12/30/birthday_decoration_set_1609348060_4d61213e_progressive.jpg)"}}></div></Link>
          <div className="card__content"><br/><br/>
          <h3 className="card__heading">16 - 20 Years</h3><br/>
          <h2 className="card__category">Another year older, another year wiser!</h2>
          </div>
        </a>
        <a className="card" href="#">
        <Link to='/service'>   <div className="card__background" style={{backgroundImage: "url(https://m.media-amazon.com/images/I/81PihBbDI2L._AC_UF1000,1000_QL80_.jpg)"}}></div></Link>
          <div className="card__content"><br/><br/>
          <h3 className="card__heading">20+ Years</h3><br/>
          <h2 className="card__category">2 Decades of wisdom gained and hoping for more!</h2>
          </div>
        </a>
      </div>
    </section>
    </div>
  );
}
