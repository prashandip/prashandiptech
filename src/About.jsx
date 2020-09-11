import React from "react";
import AboutUs from "../src/images/about-us.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Contact now to know more about"
        imgsrc={AboutUs}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
