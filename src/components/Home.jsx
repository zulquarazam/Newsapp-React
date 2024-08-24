import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero1.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">
          Elevate Your Curiousity with Every News.
        </h1>
        <p className=" text-backgroundColor">
        "Stay Informed, Stay Connected: Your One-Stop Source for Comprehensive News Coverage"
        </p>
        <div className=" lg:pl-44">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
