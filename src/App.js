import { Navigate, Route, Routes } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Footer from "./components/Footer";
import NavBar2 from "./components/Navbar2";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer className="z-50" />

    <NavBar2 />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
