import React from "react";
import '../assets/css/Services.css'
import Product4 from "./Product4";
import { productData4,responsive4 } from "./Data4";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
export default function Service4(){
    const product = productData4.map((item) => (
        <Product4
          name={item.name}
          url={item.imageurl}
          
          
        />
      ));
    return(
        <div className="App"><br/>
        <h1 className="ser_head">BIRTHDAY ENTRY CONCEPTS</h1>
        <Carousel showDots={true} responsive={responsive4}>
          {product}
        </Carousel>
      </div>
    )
}