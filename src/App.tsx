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
import { Testimonial } from "./components/Testimonial";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { SEO } from "./components/SEO";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Preloader } from "./components/Preloader";
import { TechStack } from "./components/TechStack";
import { GlobalPopup } from "./components/GlobalPopup";
import { BlogSection } from "./components/BlogSection";
import { motion, AnimatePresence } from "motion/react";
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const WorkPage = React.lazy(() => import("./pages/WorkPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const UIUXPage = React.lazy(() => import("./pages/UIUXPage"));
const WebDevPage = React.lazy(() => import("./pages/WebDevPage"));
const SoftwareDevPage = React.lazy(() => import("./pages/SoftwareDevPage"));
const MobileAppsPage = React.lazy(() => import("./pages/MobileAppsPage"));
const DigitalMarketingPage = React.lazy(() => import("./pages/DigitalMarketingPage"));
const EcommercePage = React.lazy(() => import("./pages/EcommercePage"));
const HealthcarePage = React.lazy(() => import("./pages/HealthcarePage"));
const EdTechPage = React.lazy(() => import("./pages/EdTechPage"));
const BusinessMgmtPage = React.lazy(() => import("./pages/BusinessMgmtPage"));
const PrivacyPolicyPage = React.lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsOfServicePage = React.lazy(() => import("./pages/TermsOfServicePage"));
const CareerPage = React.lazy(() => import("./pages/CareerPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const WebPlatformsPage = React.lazy(() => import("./pages/WebPlatformsPage"));
const SaaSPage = React.lazy(() => import("./pages/SaaSPage"));
const TechConsultingPage = React.lazy(() => import("./pages/TechConsultingPage"));

gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "circOut" }}
      className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden"
    >
      <Navbar />
      <SmoothScroll />
      <main>
        <React.Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Outlet />
        </React.Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <GlobalPopup />
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <>
      <SEO />
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <BlogSection />
      <Contact />
    </>
  );
};

function App() {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/web-development" element={<WebDevPage />} />
              <Route path="/services/software-development" element={<SoftwareDevPage />} />
              <Route path="/services/mobile-apps" element={<MobileAppsPage />} />
              <Route path="/services/ui-ux" element={<UIUXPage />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/industries/ecommerce" element={<EcommercePage />} />
              <Route path="/industries/healthcare" element={<HealthcarePage />} />
              <Route path="/industries/edtech" element={<EdTechPage />} />
              <Route path="/industries/business-management" element={<BusinessMgmtPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/careers" element={<CareerPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/services/web-platforms" element={<WebPlatformsPage />} />
              <Route path="/services/saas" element={<SaaSPage />} />
              <Route path="/services/technical-consulting" element={<TechConsultingPage />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
