import React, { Component } from "react";
import Slider from "react-slick";
import "./CuCarousel.css";

import carousel1 from "../assets/images/CarouselImage/Commercial.png";
import carousel2 from "../assets/images/CarouselImage/industrial.png";
import carousel3 from "../assets/images/CarouselImage/institutional.png";
import carousel4 from "../assets/images/CarouselImage/residential.png";
import carousel5 from "../assets/images/CarouselImage/temple.png";

export default class CuCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="card">
            <div className="card-body">
              <img src={carousel1} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={carousel2} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={carousel3} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={carousel4} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={carousel5} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
