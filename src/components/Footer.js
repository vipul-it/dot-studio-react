import React from "react";
import logoUrl from "../assets/logo/logo-t.png";

import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineSkype,
} from "react-icons/ai";

import {
  MdOutlinePersonOutline,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div>
        {" "}
        <h1 className="mt-24"></h1>
      </div>
      {/*Footer container */}

      <footer className=" bg-neutral-100 text-neutral-600   ">
        {/*Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
        <div className="lg:mx-28  lg:py-6 xs:mx-12 xs:py-6 grid justify-items-stretch">
          <div className="grid xs:grid-cols-1  lg:grid-cols-2 gap-3 sm:justify-items-start lg:justify-items-stretch">
            {/*Tailwind logo section */}
            <div className=" xs:pb-4  xs:w-48   sm:w-56 md:w-64 lg:w-80 flex lg:items-center ">
              <img src={logoUrl} alt="logo" />
            </div>

            {/*Useful links section */}
            <div className="grid xs:grid-cols-1 sm:grid-cols-2  sm:gap-32 lg:gap-32">
              <div className=" ">
                <h6 className="mb-4 flex justify-start font-semibold ">
                  Contact us
                </h6>
                <p className="mb-4 flex items-center justify-start ">
                  <MdOutlinePersonOutline className="mr-2" /> Dot Studio
                </p>
                <p className="mb-4 flex items-center justify-start ">
                  <MdOutlineEmail className="mr-2" /> contact@dotstudio.com
                </p>
                <p className="mb-4 flex items-center justify-start ">
                  <MdOutlinePhone className="mr-2" /> +91 987654321
                </p>
                <p className="mb-4 flex items-center justify-start ">
                  <AiOutlineSkype className="mr-2" /> Skype.com
                </p>
              </div>

              {/*Contact section */}
              <div className="">
                <h6 className="mb-4 flex justify-start font-semibold  ">
                  Location
                </h6>
                <p className="mb-4 flex justify-start ">xyx Delhi.</p>

                <h6 className="mb-4 flex flex-row justify-start font-semibold  ">
                  Follow us
                </h6>
                <div className="flex items-center  ">
                  <p className="mr-2">
                    <a href="">
                      <AiOutlineFacebook />
                    </a>
                  </p>
                  <p className="mr-2">
                    <a href="">
                      <AiOutlineLinkedin />
                    </a>
                  </p>
                  <p className="mr-2">
                    <a href="">
                      <AiOutlineInstagram />
                    </a>
                  </p>
                  <p className="mr-2">
                    <a href="">
                      <AiOutlineYoutube />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright section  */}
        <div className="mx-auto bg-[#F7F7F7] pb-4 text-xs text-center">
          <span>Copyright © 2023 </span>
          <a className=" text-neutral-500 no-underline" href="">
            Dot Studio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
