import React from "react";
import About_Mobile from "./about/aboutMobile";
import About from "./about/about";
import Banner from "./baner/banner";
import Footer from "./footer/footer";
import Headerr from "./header/header";
import Intro from "./intro/intro";
import ProgressBar from "./progressBar/progressBar";
import Property from "./property/property";
import Roadmap from "./roadmap/roadmap";
import Slides from "./Slider/slider";
import Slides_Mobile from "./Slider/sliderMobile";
import Roadmap_Mobile from "./roadmap/roadmapMobile";

function Landing() {
  return (
    <>
      <Headerr />
      <Banner />
      <ProgressBar />
      <Property />
      <Intro />
      <Roadmap />
      <Roadmap_Mobile/>
      <About_Mobile />
      <About />
      <Slides />
      <Slides_Mobile />
      <Footer />
    </>
  );
}
export default Landing;
