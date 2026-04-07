import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { SEO } from "./components/SEO";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <SmoothScroll />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <SEO />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

