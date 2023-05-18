import React, { useEffect } from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar2 from "../components/Navbar2";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Interior Designer";
  }, []);
  return (
    <div>
      
      <Hero />
      
    </div>
  );
};

export default Home;
