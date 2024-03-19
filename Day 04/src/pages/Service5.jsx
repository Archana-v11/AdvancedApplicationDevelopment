import React from "react";
import '../assets/css/Services.css'
import Product5 from "./Product5";
import { productData5,responsive5 } from "./Data5";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
export default function Service5(){
    const product = productData5.map((item) => (
        <Product5
          name={item.name}
          url={item.imageurl}
          
          
        />
      ));
    return(
        <div className="App"><br/>
        <h1 className="ser_head">BIRTHDAY FOODSTALLS</h1>
        <Carousel showDots={true} responsive={responsive5}>
          {product}
        </Carousel>
      </div>
    )
}