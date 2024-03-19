import React from "react";
import '../assets/css/Services.css'
import Product2 from "./Product2";
import { productData2,responsive2 } from "./Data2";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
export default function Service2(){
    const product = productData2.map((item) => (
        <Product2
          name={item.name}
          url={item.imageurl}
          
          
        />
      ));
    return(
        <div className="App"><br/>
        <h1 className="ser_head">BIRTHDAY CAKES</h1>
        <Carousel showDots={true} responsive={responsive2}>
          {product}
        </Carousel>
      </div>
    )
}