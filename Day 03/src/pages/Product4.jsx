import React from "react";
import { Link } from "react-router-dom";
export default function Product4(props) {
  return (
    <div className="product">
    <div className="pro_full">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      
      
        <Link to='/service5'><button>Book Now</button> </Link>
      
    </div>
    </div>
  );
}