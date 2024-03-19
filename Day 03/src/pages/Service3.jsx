import React from "react";
import '../assets/css/Services.css'
import Product3 from "./Product3";
import { productData3,responsive3 } from "./Data3";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
export default function Service3(){
    const product = productData3.map((item) => (
        <Product3
          name={item.name}
          url={item.imageurl}
          
          
        />
      ));
    return(
        <div className="App"><br/>
        <h1 className="ser_head">BIRTHDAY ENTERTAINMENTS</h1>
        <Carousel showDots={true} responsive={responsive3}>
          {product}
        </Carousel>
      </div>
    )
}