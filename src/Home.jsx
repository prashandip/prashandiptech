import React from "react";
import softwork from "../src/images/softwork.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={softwork}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
