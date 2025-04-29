import React from "react";
import { Carousel } from "antd";
import "./OonaCarousel.css";
import img1 from "../../../images/carousel_img/image 40.png";
import img2 from "../../../images/carousel_img/image 38.png";
import phil_life_carousel_1 from "../../../assets/ihc_icon/home1.png";
import phil_life_carousel_2 from "../../../assets/ihc_icon/home2.png";
import phil_life_carousel_3 from "../../../assets/ihc_icon/home3.png";

const OonaCarousel = () => {
  return (
    <>
      <Carousel autoplay>
        <div className="carousel-img">
          <img src={phil_life_carousel_1} />
        </div>
        <div className="carousel-img">
          <img src={phil_life_carousel_2} />
        </div>
        <div className="carousel-img">
          <img src={phil_life_carousel_3} />
        </div>
      </Carousel>
    </>
  );
};

export default OonaCarousel;
