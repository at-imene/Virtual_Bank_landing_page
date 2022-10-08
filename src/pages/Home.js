import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { aboutObj, discoverObj, signUpObj } from "../components/Section/data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Heading />
      <Section {...aboutObj} />
      <Section {...discoverObj} />
      <Services />
      <Section {...signUpObj} />
      <Footer />
    </>
  );
};

export default Home;
