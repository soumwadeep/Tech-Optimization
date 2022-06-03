import React from "react";
import Common from "./Common";
import web2 from "../src/images/bg2.png";

const About = () => {
  return (
    <>
    <Common 
    name="About " 
    subname="We are a team of talented people who are passionate about web development"
    imgsrc={web2}
    visit="/contact" 
    btname="Contact Now" 
    />
    </>
  );
};

export default About;
