import React from "react";
import '../assets/css/Services.css'
import Product from "./Product";
import { productData ,responsive} from "./Data";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
export default function Service(){
    const product = productData.map((item) => (
        <Product
          name={item.name}
          url={item.imageurl}
          
          
        />
      ));
    return(
        <div className="App"><br/>
        <h1 className="ser_head">BIRTHDAY DECORATIONS</h1>
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>
      </div>
    )
}