import React from "react";
import { Link } from "react-router-dom";
export default function Product5(props) {
  return (
    <div className="product">
    <div className="pro_full">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      
      
        <Link to='/booking'><button>Book Now</button> </Link>
      
    </div>
    </div>
  );
}