import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceDetail from "./components/ServiceDetail";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import UsesofUs from "./components/UsesofUs";
import Footer from "./components/Footer";
import ReachUs from "./components/ReachUs";
import Client from "./components/Client";

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Client />
      <UsesofUs />
      <ReachUs />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ReachUs />} />

        {/* ✅ ONLY THIS for all services */}
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;