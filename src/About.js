import React from "react";
import Common from "./Common";
import web from "../src/images/bg1.svg";

const About = () => {
  return (
    <>
    <Common 
    name="About " 
    subname="We are here to help you grow your business with the best team members"
    imgsrc={web} 
    visit="/contact" 
    btname="Contact Now" 
    />
    </>
  );
};

export default About;
