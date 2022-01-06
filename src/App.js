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
import "./styles/main.scss"

function App() {
  
  return (
    <BrowserRouter>
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