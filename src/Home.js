import React from "react";
import Common from "./Common";
import web from "../src/images/bg1.svg";

const Home = () => {
  return (
    <>
      <Common 
      name="Grow Your Business With " 
      subname="We are here to help you grow your business with the best of the best"
      imgsrc={web} 
      visit="/service" 
      btname="Get Started"
      />
    </>
  );
};

export default Home;
