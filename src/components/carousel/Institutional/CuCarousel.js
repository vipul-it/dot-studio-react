import React, { Component } from "react";
import Slider from "react-slick";
import "../ProjectCarousel.css";

import carousel1 from "./1.jpg";
import carousel2 from "./2.jpg";
import carousel3 from "./3.jpg";

export default class CuCarousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
    };
    return (
      <div className=" lg:pt-0 lg:pr-10 lg:pb-0 lg:pl-10 xs:pt-9 xs:pr-2 xs:pb-9 xs:pl-2 max-w-[1000px] my-0 mx-auto" >
        <Slider {...settings}>
          <div className="card">
            <div className="card-body lg:m-2.5 xs:m-0.5">
              <img src={carousel1} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card-body lg:m-2.5 xs:m-0.5 ">
              <img src={carousel2} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="card-body lg:m-2.5 xs:m-0.5">
              <img src={carousel3} alt="" />
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}
