import { useState } from "react";
import logo from "../assets/logo/logo-t-2.png";
import { Link } from "react-scroll";
import { Link as ReactLink } from "react-router-dom";

export default function NavBar2() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow fixed z-10 ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between py-0 lg:py-0 lg:block">
            <ReactLink to="/">
              <img className="lg:w-[36%] xs:w-[50%]" src={logo} alt="logo" />
            </ReactLink>

            <div className="lg:hidden">
              <button
                className="p-2 text-dot-b rounded outline-none focus:border-dot-b focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 cursor-pointer ">
              <li className="text-gray-600 hover:text-blue-400 ">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-400}
                  duration={800}
                >
                  Home
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-400 ">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={220}
                  duration={800}
                >
                  About
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-400 ">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                >
                  Projects
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-400 ">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-170}
                  duration={800}
                >
                  Services
                </Link>
              </li>
              <li className="text-gray-600 hover:text-blue-400  ">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={30}
                  duration={800}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
