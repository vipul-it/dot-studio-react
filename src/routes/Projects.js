import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

import CoustomModel from "../components/CoustomModel";
import projectbg from "../assets/video/project-bg.mp4";

import Commercial from "../components/carousel/Commercial/CuCarousel";
import Residential from "../components/carousel/Residential/CuCarousel";
import Institutional from "../components/carousel/Institutional/CuCarousel";
import Temple from "../components/carousel/Temple/CuCarousel";
import Industrial from "../components/carousel/Industrial/CuCarousel";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects - Interior Designer";
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* Pin to bottom left corner button */}
      <div class="xs:hidden lg:inline ">
        <div class="fixed lg:bottom-2 lg:left-5 lg:h-16 lg:w-16 lg:z-10">
          <Link to="/">
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
        <div class="fixed lg:bottom-2 lg:right-5 lg:h-16 lg:w-16 lg:z-10" >
          <CoustomModel />
        </div>
      </div>

      {/* home page start  */}
      <div className="lg:px-20 lg:py-40 sm:py-36 md:py-36 xs:pt-10 xs:p-5 xs:bg-gray-100 sm:bg-inherit">
        <div className=" lg:pt-5 xs:pt-4  lg:grid  -z-20">
          <video
            class="absolute z-10 w-[400px] lg:w-auto lg:min-w-full lg:min-h-full lg:max-w-none  sm:inline xs:hidden "
            id="background-project-video"
            autoPlay
            loop
            muted
          >
            <source src={projectbg} type="video/mp4" />
          </video>
        </div>
        
        <div className=" xl:pt-28 lg:pt-6  xs:pt-2 sm:pb-0">
          <div className="grid sm:grid-cols-2 xs:grid-cols-1">
            <div className="md:col-span-4 bg-opacity-80 lg:max-w-md p-4 bg-white border border-gray-200 rounded-lg">
              <h1 className=" lg:text-5xl font-bold   xs:text-3xl xs:pb-2 animate__animated animate__rubberBand animate__delay-1s">
                Our <span className=" text-dot-b"> Successful </span> <br />
                Projects
              </h1>
              <p className=" lg:text-lg xs:text-sm  md:text-justify xs:text-left">
                From designing innovative Industrial solutions to creating
                beautiful residential designs, each project represents a unique
                challenge that we were proud to take on.
              </p>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>

      {/* home page end  */}

      {/* Commercial project start  */}
      <div
        className="lg:pt-56 lg:px-24 sm:-pt-8 xs:pt-6 md:pt-28 xs:px-6 lg:py-8 "
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <div className="grid lg:grid-cols-10 xs:grid-cols-1">
          <div className="col-span-4 ">
            <h2 className=" lg:text-4xl xs:text-3xl lg:font-semibold font-bold xs:pb-2">
              Commercial
            </h2>
            <p className=" lg:text-lg xs:text-sm text-left xs:pb-2 ">
              Our services are customizable and adaptable to meet the unique
              needs of each project.
            </p>
            <ul className="list-disc lg:px-8 xs:px-4 xs:text-sm">
              <li className="xs:pb-1.5">High-quality work that is always delivered on time.</li>
              <li className="xs:pb-1.5">Attention to detail and a commitment to accuracy.</li>
              <li className="xs:pb-1.5">
                Extensive experience in commercial project development and
                management.
              </li>
            </ul>
            <div className="flex xs:justify-center lg:justify-start">
              {" "}
              <button
                type="button"
                class="mt-4 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded text-sm lg:px-6 xs:px-24 py-2 text-center inline-flex items-center  "
              >
                I’m Interested 
              </button>
            </div>
          </div>
          <div className="col-span-6 lg:p-6">
            <Commercial />
          </div>
        </div>
      </div>
      {/* Commercial project end  */}

      {/* Residential project start  */}
      <div
        className="lg:pt-16 lg:px-24 xs:pt-8 xs:px-6  lg:py-8 bg-gray-100 "
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <div className="grid lg:grid-cols-10 xs:grid-cols-1">
          <div className="col-span-4 lg:order-last">
            <h2 className=" lg:text-4xl xs:text-3xl lg:font-semibold font-bold xs:pb-2">
            Residential
            </h2>
            <p className=" lg:text-lg xs:text-sm text-left xs:pb-2 ">
              We believe that your home should be a reflection of your unique
              personality and lifestyle, and we are committed to helping you
              achieve that.
            </p>
            <ul className="list-disc lg:px-8 xs:px-4 xs:text-sm">
              <li className="xs:pb-1.5">Attention to detail and commitment to quality.</li>
              <li className="xs:pb-1.5">
                Extensive experience in residential project design and
                construction.
              </li>
              <li className="xs:pb-1.5">
                Use of high-quality materials and finishes to ensure
                long-lasting beauty and durability.
              </li>
            </ul>
            <div className="flex xs:justify-center lg:justify-start">
              {" "}
              <button
                type="button"
                class="mt-4 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded text-sm lg:px-6 xs:px-24 py-2 text-center inline-flex items-center  "
              >
                I’m Interested 
              </button>
            </div>
          </div>
          <div className="col-span-6 lg:p-6 ">
            <Residential />
          </div>
        </div>
      </div>
      {/* Residential project end  */}

      {/* Institutional project start  */}
      <div
        className="lg:pt-16 lg:px-24 xs:pt-8 xs:px-4  lg:py-8 "
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <div className="grid lg:grid-cols-10 xs:grid-cols-1">
          <div className="col-span-4 ">
            <h2 className=" lg:text-4xl xs:text-3xl lg:font-semibold font-bold xs:pb-2">
            Institutional
            </h2>
            <p className=" lg:text-lg xs:text-sm text-left xs:pb-2 ">
              We understand that institutional projects require a high level of
              professionalism, expertise, and attention to detail.
            </p>
            <ul className="list-disc lg:px-8 xs:px-4 xs:text-sm">
              <li>
                Proven experience in institutional project design and
                construction.
              </li>
              <li>
                Strong knowledge of building codes and regulations for
                compliance.
              </li>
              <li>Collaborative approach to working with stakeholders.</li>
            </ul>
            <div className="flex xs:justify-center lg:justify-start">
              {" "}
              <button
                type="button"
                class="mt-4 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded text-sm lg:px-6 xs:px-24 py-2 text-center inline-flex items-center  "
              >
                I’m Interested 
              </button>
            </div>
          </div>
          <div className="col-span-6 lg:p-6">
            <Institutional />
          </div>
        </div>
      </div>
      {/* Institutional project end  */}

      {/* Temple project start  */}
      <div
        className="lg:pt-16 lg:px-24 xs:pt-8 xs:px-4  lg:py-8 bg-gray-100 "
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
         <div className="grid lg:grid-cols-10 xs:grid-cols-1">
          <div className="col-span-4 lg:order-last">
            <h2 className=" lg:text-4xl xs:text-3xl lg:font-semibold font-bold xs:pb-2">
            Temple
            </h2>
            <p className=" lg:text-lg xs:text-sm text-left xs:pb-2 ">
              We understand the importance of creating a temple that not only
              meets the practical needs of your community but also inspires
              reverence and spiritual growth.
            </p>
            <ul className="list-disc lg:px-8 xs:px-4 xs:text-sm">
              <li>Extensive experience in temple project design.</li>
              <li>
                Strong understanding of religious and cultural customs and
                practices.
              </li>
              <li>
                Attention to detail and commitment to quality for sacred and
                functional spaces.
              </li>
            </ul>
            <div className="flex xs:justify-center lg:justify-start">
              {" "}
              <button
                type="button"
                class="mt-4 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded text-sm lg:px-6 xs:px-24 py-2 text-center inline-flex items-center  "
              >
                I’m Interested 
              </button>
            </div>
          </div>
          <div className="col-span-6 lg:p-6 ">
            <Temple />
          </div>
        </div>
      </div>
      {/* Temple project end  */}

      {/* Industrial project start  */}
      <div
        className="lg:pt-16 lg:px-24 xs:pt-8 xs:px-4  lg:py-8 xs:-mb-16"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <div className="grid lg:grid-cols-10 xs:grid-cols-1">
          <div className="col-span-4 ">
            <h2 className=" lg:text-4xl xs:text-3xl lg:font-semibold font-bold xs:pb-2">
            Industrial
            </h2>
            <p className=" lg:text-lg xs:text-sm text-left xs:pb-2 ">
              We understand that industrial projects require a high level of
              expertise, attention to detail, and collaboration to ensure the
              safe and efficient operation of your facility.
            </p>
            <ul className="list-disc lg:px-8 xs:px-4 xs:text-sm">
              <li>
                EStrong knowledge of industrial processes and equipment
                requirements.
              </li>
              <li>Commitment to on-time and on-budget project delivery.</li>
              <li>
                Use of innovative design strategies to optimize production and
                reduce costs.
              </li>
            </ul>
            <div className="flex xs:justify-center lg:justify-start">
              {" "}
              <button
                type="button"
                class="mt-4 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded text-sm lg:px-6 xs:px-24 py-2 text-center inline-flex items-center  "
              >
                I’m Interested 
              </button>
            </div>
          </div>
          <div className="col-span-6 lg:p-6">
            <Industrial className="" />
          </div>
        </div>
      </div>
      {/* Industrial project end  */}
    </div>
  );
};

export default Projects;
