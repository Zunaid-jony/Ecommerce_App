import React from "react";
import { Carousel } from "react-bootstrap";
import Bg1 from "../../All-imgs/phone1.png";
import Bg2 from "../../All-imgs/bg2.png";
import Bg3 from "../../All-imgs/Bg3.png";
const Banner = () => {
  return (
    <div className="banner">
      <Carousel >

        
      <Carousel.Item >
        <img
        style={{width: '100%', height: '400px',  }}
          className="d-block center"
          src={Bg3}
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
        style={{width: '60%', height: '400px',  }}
          className="d-block center"
          src={Bg1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{width: '70%', height: '400px',  }}
          className="d-block center"
          src={Bg2}
          alt="First slide"
        />
       
      </Carousel.Item>

      
    </Carousel>
    </div>
  );
};

export default Banner;
