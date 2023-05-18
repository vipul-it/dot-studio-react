import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Hero.css";
import "animate.css";
import CuCarousel from "./CuCarousel";
import ContactComponent from "./ContactUs";

import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

import videobg from "../assets/video/Background.mp4";
import herovideobg from "../assets/video/home-background.mp4";

import illustration1 from "../assets/images/Hero/1.svg";
import illustration2 from "../assets/images/Hero/2.svg";
import illustration3 from "../assets/images/Hero/3.svg";
import services1 from "../assets/images/Hero/services/Architecture design.svg";
import services2 from "../assets/images/Hero/services/Interior design.svg";
import services3 from "../assets/images/Hero/services/Landscape design.svg";
import services4 from "../assets/images/Hero/services/Engineering services.svg";

import servicebgimg1 from "../assets/images/Hero/service-bg-img.png";
import servicebgimg2 from "../assets/images/Hero/Spin-1.png";
import { FaAward } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { GiProfit } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { RiShieldStarLine } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineEngineering } from "react-icons/md";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import CoustomModel from "../components/CoustomModel";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* Pin to bottom left corner button */}
      <div class="xs:hidden lg:inline ">
        <div class="fixed lg:bottom-2 lg:left-5 lg:h-16 lg:w-16 lg:z-10">
          <Link to="/projects">
            <button
              type="button"
              class=" text-white bg-dot-b hover:bg-dot-bp/90 focus:ring-4 focus:outline-none focus:ring-dot-bp font-medium rounded text-sm px-2 py-2 text-center inline-flex items-center"
            >
              <BsArrowLeftSquareFill className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Pin to bottom right corner email button */}
      <div class="xs:hidden lg:inline">
        <div class="fixed lg:bottom-2 lg:right-5 lg:h-16 lg:w-16 lg:z-10">
          <CoustomModel />
        </div>
      </div>
      <div className="lg:px-20 lg:py-40 sm:py-36 md:py-36 xs:pt-10 xs:p-5 ">
        <div className=" ">
          <video
            class="absolute z-10 w-[400px] lg:w-auto lg:min-w-full lg:min-h-full lg:max-w-none   "
            id="background-hero-video"
            autoPlay
            loop
            muted
          >
            <source src={herovideobg} type="video/mp4" />
          </video>
        </div>

        {/* home section  */}

        <div className=" xl:mt-48 lg:mt-48 md:mt-48 sm:mt-2 xs:mt-28 " id="home">
          <div className="absolute">
            <div className="bg-opacity-80 lg:max-w-lg xs:max-w-sm lg:p-6 xs:p-3 bg-white border border-gray-200 rounded-lg shadow animate__animated  animate__backInDown animate__delay-0s">
              <div
                className="lg:max-w-[600px] lg:mx-auto xs:max-w-[300px] xs:mx-auto"
                data-aos="fade-right"
              >
                <h1 className=" lg:text-4xl xs:text-3xl font-bold  pb-2">
                  Designing Your <br />{" "}
                  <span className="text-dot-b">Space,</span>
                  Your Way!
                </h1>
                <h3 className=" lg:text-lg xs:text-sm text-justify ">
                  <Typewriter
                    options={{
                      strings: [
                        `We understand that every individual has their own <span class="text-dot-b">unique </span>
                        taste and preferences when it comes to designing their
                        spaces, which is why we strive to create a personalized
                        experience that is tailored to their specific needs`,
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 30,
                      pauseFor: 50000,
                      deleteSpeed: 6,
                    }}
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hero section end  */}

      {/* About section start  */}
      <div
        className="lg:mx-20 xl:pt-[340px] lg:pt-64 sm:pt-32 xs:pt-56 "
        id="about"
      >
        <div className="lg:px-6">
          <h1 className="xs:text-center lg:text-start">About</h1>
        </div>

        <div className="grid lg:grid-cols-3 xs:grid-cols-1 lg:gap-8 xs:gap-8 xs:p-6 ">
          <div
            className="bg-gray-100   rounded-lg px-3 py-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="flex">
              <span className="text-dot-b text-6xl m-4 ml-0 mt-0 ">
                <RiShieldStarLine />{" "}
              </span>
              <div>
                <h4 className="text-xl font-semibold">
                  Creative Interior <br /> Designers
                </h4>
              </div>{" "}
            </div>{" "}
            <p className="text-dot-tp text-sm ">
              {" "}
              Our expertise and creativity are showcased in every project we
              undertake, resulting in stunning and unique spaces. Trust us to
              transform your vision into a work of art.{" "}
            </p>
          </div>

          <div
            className="bg-gray-100  rounded-lg px-3 py-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="flex">
              <span className="text-dot-b text-6xl m-4 ml-0 mt-0 ">
                <MdOutlineEngineering />{" "}
              </span>
              <div>
                <h4 className="text-xl font-semibold">
                  Our Best <br /> Engineers
                </h4>
              </div>{" "}
            </div>{" "}
            <p className="text-dot-tp text-sm ">
              {" "}
              Our team of experienced engineers who have innovative designs and
              groundbreaking solutions for quirky needs.{" "}
            </p>
          </div>

          <div
            className="bg-gray-100  rounded-lg px-3 py-4 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="flex">
              <span className="text-dot-b text-6xl m-4 ml-0 mt-0 ">
                <MdPeopleAlt />{" "}
              </span>
              <div>
                <h4 className="text-xl font-semibold">
                  Professional <br /> Consultants
                </h4>
              </div>{" "}
            </div>{" "}
            <p className="text-dot-tp text-sm ">
              {" "}
              Our team of highly professional consultants is committed to
              providing top-notch services that are tailored to your specific
              needs and requirements.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* About section end  */}

      {/* From concept section start  */}
      <div className="lg:mx-20 lg:mt-12 xs:mx-6 xs:mt-10 ">
        {/* <div className="">
          <video
          className="w-[400px] lg:w-auto lg:min-w-full lg:min-h-full lg:max-w-none"
          id="background-video"
          autoPlay
          loop
          muted
        >
          <source src={videobg} type="video/mp4" />
        </video>
        </div> */}

        <div className="lg:px-24 xs:px-4">
          <h2
            className="lg:text-4xl xs:text-3xl font-bold text-center capitalize text-dot-p "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
          >
            From concept to completion
          </h2>
          <p
            className="text-md text-center pt-4 capitalize text-dot-s pb-8"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
          >
            We are your one-stop shop for design solutions, taking care of
            everything from start to finish. With our comprehensive suite of
            services, we make it easy to turn your vision into a reality. From
            the initial concept to the final product, we're committed to
            delivering exceptional results every step of the way.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 xs:grid-cols-1 lg:gap-12 xs:gap-6">
          <div className="grid justify-items-center">
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
              className="-mb-6"
              src={illustration1}
              alt="illustration"
            />
            <h2
              className="text-2xl text-center font-semibold  lg:border-b-4 xs:border-b-2 border-dot-b leading-10 mb-3 border-double"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Our Designs
            </h2>
            <p
              className="text-dot-tp text-md text-justify"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Transform your living space with designs that reflect your unique
              style and lifestyle. Our personalized design solutions are
              tailored to meet your individual needs and preferences.
            </p>
          </div>
          <div className="grid justify-items-center">
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
              className="mb-5"
              src={illustration2}
              alt="illustration"
            />
            <h2
              className="text-2xl text-center font-semibold  lg:border-b-4 xs:border-b-2 border-dot-b leading-10 mb-3 border-double"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Our work
            </h2>
            <p
              className="text-dot-tp text-md text-justify"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Flawlessly executed designs are our hallmark, reflecting our
              commitment to precision in every aspect of our work. Trust us to
              deliver exceptional results with our unwavering attention to
              detail and dedication to excellence.
            </p>
          </div>
          <div className="grid justify-items-center">
            <img
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
              className="mb-2"
              src={illustration3}
              alt="illustration"
            />
            <h2
              className="text-2xl text-center font-semibold  lg:border-b-4 xs:border-b-2 border-dot-b leading-10 mb-3 border-double"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Our commitment
            </h2>
            <p
              className="text-dot-tp text-md text-justify"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="2000"
            >
              Our commitment to your project goes beyond delivery. We offer
              ongoing support to ensure your continued satisfaction with our
              services, reflecting our dedication to your long-term success
            </p>
          </div>
        </div>
      </div>

      {/* From concept section end  */}

      {/* Accomplishments section start  */}
      <div
        className="lg:mx-20 lg:mt-40 xs:mt-16"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <div className="we-do-bg lg:rounded-3xl xs:rounded-none grid lg:grid-cols-3 xs:grid-cols-1 ">
          <div className="lg:-mt-16 xs:hidden lg:inline">
            <div class="lg:ml-6">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      class="rounded-lg p-3 "
                      src={servicebgimg1}
                      alt="service"
                    />
                  </div>
                  <div class="flip-card-back">
                    <img
                      class="rounded-lg p-3 "
                      src={servicebgimg2}
                      alt="service"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-2 bg-[#e7f7f7] p-4">
            <div className="lg:-mt-20 lg:mb-0 xs:mb-3 text-cemter">
              <h1 className="lg:text-4xl xs:p-4 xs:text-3xl  font-bold text-center capitalize ">
                Our Accomplishments
              </h1>
            </div>
            <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-[20px] xs:pb-6 lg:pb-0">
              <div className="divide-y-2 lg:divide-dot-b xs:divide-dot-b/20  divide-solid lg:m-12 ">
                <h4 className="text-5xl font-semibold text-dot-bs text-center ">
                  50+
                </h4>
                <p className="text-dot-tp text-sm text-center ">
                  {" "}
                  Design projects
                </p>
              </div>

              <div className="divide-y-2 lg:divide-dot-b xs:divide-dot-b/20 divide-solid lg:m-12">
                <h4 className="text-5xl font-semibold text-dot-bs text-center">
                  20+
                </h4>
                <p className="text-dot-tp text-sm text-center ">
                  {" "}
                  Home projects
                </p>
              </div>

              <div className="divide-y-2 lg:divide-dot-b xs:divide-dot-b/20 divide-solid lg:m-12">
                <h4 className="text-5xl font-semibold text-dot-bs text-center">
                  100+
                </h4>
                <p className="text-dot-tp text-sm text-center ">
                  {" "}
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Accomplishments section end  */}

      {/* project section start  */}

      <div
        className="lg:px-28 lg:mt-24 lg:py-20 xs:px-6 xs:mt-60 xs:py-12 bg-gray-100 "
        id="projects"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <div className="lg:px-28">
          <h2 className="lg:text-4xl xs:text-3xl font-bold text-center capitalize text-dot-p">
            Some of Our Recent Projects
          </h2>
          <p className="text-md text-center pt-4 capitalize text-dot-s">
            Our company is driven by a strong belief that our clients deserve
            nothing less than exceptional results, and we take immense pride in
            our work to make this a reality.Our portfolio speaks to our
            expertise and dedication to delivering outstanding results, and
            we're excited to bring that same level of excellence to your next
            project
          </p>
        </div>
        <div className="lg:mx-20 lg:py-8 xs:mx-6 xs:py-4 ">
          <CuCarousel className="max-w-[100%] max-h-[100%]" />

          <div>
            <p class="text-gray-500 pt-0 float-right pr-7 text-lg">
              <Link
                to="/projects"
                class="inline-flex items-center font-medium text-dot-bs  hover:underline"
              >
                See all projects
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* project section end  */}

      {/* services section start  */}

      <div
        className="lg:mx-20 lg:mt-16 xs:mx-6  xs:mt-8"
        id="services"
        // data-aos="fade-up"
        // data-aos-anchor-placement="center-bottom"
        // data-aos-duration="2000"
      >
        <div className="lg:pb-12 xs:pb-6">
          <h2 className="lg:text-4xl xs:text-3xl font-bold text-center capitalize">
            Our Key services
          </h2>
          <p className="text-md text-center xs:tracking-tight lg:pt-4 xs:pt-2 lg:px-40 capitalize sm:text-center xs:text-justify">
            Let us help you turn your unique vision into a reality by crafting a
            space that perfectly reflects your individual style and personality.
            We're passionate about bringing our clients' dreams to life, and
            we'll work closely with you every step of the way to ensure your
            complete satisfaction.
          </p>
        </div>

        <div className=" grid lg:grid-cols-2 xs:grid-cols-1 gap-8 ">
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="p-6 bg-white border border-red-200 rounded-lg shadow  bg-gradient-to-r from-white to-red-200 hover:shadow-lg"
          >
            <div className="grid sm:grid-cols-2">
              <div>
                <h5 class="mb-2 text-2xl ">Architecture designing</h5>
                <p class="font-normal text-sm text-gray-700">
                  Our team of architects and designers have years of experience
                  in the industry and are skilled at utilizing the latest design
                  software and technology to bring your vision to life.
                </p>
              </div>
              <div>
                <img src={services1} alt="service" />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="p-6  bg-white border border-blue-200 rounded-lg shadow  bg-gradient-to-r from-white to-blue-200 hover:shadow-lg"
          >
            <div className="grid sm:grid-cols-2">
              <div>
                <h5 class="mb-2 text-2xl  ">Interior Designing</h5>
                <p class="font-normal text-sm text-gray-700">
                  Our team of experienced designers is passionate about creating
                  beautiful, functional spaces that meet our client's unique
                  needs and preferences.
                </p>
              </div>
              <div>
                <img src={services2} alt="service" />
              </div>
            </div>
          </div>
        </div>
        {/* secound row  */}
        <div className="xs:mt-8 lg:mt-8 grid lg:grid-cols-2 gap-8 ">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="p-6 order-last bg-white border border-blue-200 rounded-lg shadow  bg-gradient-to-r from-white to-blue-200 hover:shadow-lg"
          >
            <div className="grid sm:grid-cols-2">
              <div >
                <h5 class="mb-2 text-2xl ">Landscape Designing</h5>
                <p class="font-normal text-sm text-gray-700">
                  From initial concept development to final installation, we
                  work closely with our clients to understand their needs,
                  preferences, and budgets.
                </p>
              </div>
              <div>
                <img src={services3} alt="service" />
              </div>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="p-6  bg-white border border-red-200 rounded-lg shadow  bg-gradient-to-r from-white to-red-200 hover:shadow-lg"
          >
            <div className="grid sm:grid-cols-2">
              <div>
                <h5 class="mb-2 text-2xl  ">Engineering services</h5>
                <p class="font-normal text-sm text-gray-700">
                  Our team of highly skilled engineers and technical experts is
                  committed to delivering innovative solutions that meet the
                  unique needs and challenges of our clients.
                </p>
              </div>
              <div>
                <img src={services4} alt="service " />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services section start  */}

      {/* why choose us section start  */}
      <div
        className="lg:mt-28 lg:pt-20 xs:pt-8 xs:mt-12 lg:pb-10 text-center xs:px-6 bg-gray-100"
        // data-aos="fade-up"
        // data-aos-anchor-placement="center-bottom"
        // data-aos-duration="2000"
      >
        <div className="lg:pb-12 xs:pb-4">
          <h2 className="lg:text-4xl xs:text-3xl font-bold text-center capitalize">
            Why choose us?
          </h2>
          <p className="text-md  text-center pt-4 lg:px-52 capitalize xs:text-justify sm:text-center">
            Experience the transformation of your dream project as we bring it
            to life with meticulous attention to detail and unwavering
            commitment to perfection. Our team of experts is dedicated to
            delivering exceptional results that exceed your expectations, and
            we're excited to showcase our skills in bringing your vision to
            life.
          </p>
        </div>
        <div className="lg:mx-20 lg:pb-8 xs:pb-6 grid lg:grid-cols-4 sm:grid-cols-2 gap-8">
          <div className=" p-2 text-center lg:border-r-2 ">
            <div
              className="flex justify-center pb-3"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="5000"
            >
              <span className="text-6xl text-dot-b ">
                <BiDonateHeart />
              </span>
            </div>
            <h2 className="text-center text-md">Made for you</h2>
            <p className="text-dot-tp text-sm">
              Our services are specifically tailored to your style and needs
            </p>
          </div>
          <div className=" p-2 text-center lg:border-r-2 ">
            <div
              className="flex justify-center pb-3"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="5000"
            >
              <span className="text-6xl text-dot-b">
                <GiProfit />
              </span>
            </div>
            <h2 className="text-center text-md">Budget-friendly</h2>
            <p className="text-dot-tp text-sm">
              Affordable design solutions that don't compromise on quality or
              style.
            </p>
          </div>
          <div className=" p-2 text-center lg:border-r-2 ">
            <div
              className="flex justify-center pb-3"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="5000"
            >
              <span className="text-6xl text-dot-b ">
                <FaAward />
              </span>
            </div>
            <h2 className="text-center text-md">Quality Service</h2>
            <p className="text-dot-tp text-sm">
              Experience the highest standards of quality and professionalism
              with our services.
            </p>
          </div>
          <div className=" p-2 text-center ">
            <div
              className="flex justify-center pb-3"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="5000"
            >
              <span className="text-6xl text-dot-b  ">
                <TbTruckDelivery />
              </span>
            </div>
            <h2 className="text-center text-md">On-Time Delivery</h2>
            <p className="text-dot-tp text-sm">
              we ensure that your project is completed on time and within
              budget.
            </p>
          </div>
        </div>
      </div>
      {/* why choose us section end  */}

      {/* contact us section start  */}
      <div
        className="lg:mx-20 lg:pt-28 pb-4 xs:mx-6 xs:pt-10"
        id="contact"
        // data-aos="fade-up"
        // data-aos-anchor-placement="center-bottom"
        // data-aos-duration="2000"
      >
        <div className="pb-12 text-center ">
          <h2 className="lg:text-4xl xs:text-3xl font-bold text-center capitalize">
            Interested? Let's have a chat.
          </h2>
          <p className="text-md text-center pt-4 capitalize">
            Leave us a message in the box below and our team will respond
            promptly to assist you with all your design needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 -mb-12">
          <div className="lg:m-10 lg:ml-0 mt-2">
            <div className="w-[100%] p-2">
              <iframe
                width="100%"
                height="360"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=appsuccessor%20media%20noida%20secoter%202+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  measure acres/hectares on map
                </a>
              </iframe>
            </div>
            <div className="mt-5 grid grid-cols-12  p-2 justify-items-stretch">
              <div className="p-3 border-r-2 col-span-5">
                <h5 className="font-bold">Address</h5>
                <p>D63, Sector-2, Noida, Uttar Pradesh 201301</p>
              </div>
              <div className="p-3 border-r-2  col-span-5">
                <h5 className="font-bold">Timings</h5>
                <p>
                  Monday to Saturday <br /> 10 am - 7 pm
                </p>
              </div>
              <div className="grid justify-items-center items-center col-span-2">
                <img
                  src="https://img.icons8.com/color/48/null/google-maps-new.png"
                  alt="location"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-items-center">
            <ContactComponent />
          </div>
        </div>
      </div>
      {/* contact us section end  */}
    </div>
  );
};

export default Hero;
