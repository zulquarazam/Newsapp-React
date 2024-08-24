import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14 text-white">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        At NewsWeb, we believe that staying informed shouldn't be a hassle. That's why we've created a platform that seamlessly combines international and national news on a single page, providing you with a comprehensive and efficient news-reading experience.
        </p>
        <p>
        Save time and effort with our all-in-one news platform. No more switching between different websites to get a complete picture of what’s happening locally and globally.


        </p>
        <div className=" flex justify-center lg:justify-start">
          
        </div>
      </div>
    </div>
  );
};

export default About;
