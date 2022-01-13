import react from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./pages/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import Home from "./pages/home";
import "./styles/main.scss";
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Modal from "./pages/modal";

function App() {

  AOS.init();

  window.onload = function () {
    const el = document.getElementById('overlay');
    el.style.display = 'none';
  };

  return (
    <BrowserRouter>
      <Modal />
      <div id="overlay">
        <img id="overlay-img" src="./assets/img/logo.png" alt="logo" />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="xizmatlar" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="aloqa" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;