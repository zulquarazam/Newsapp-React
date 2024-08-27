import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/ddnews.jpeg";
import menu2 from "../assets/img/hindustan times.png";
import menu3 from "../assets/img/india today.png";
import menu4 from "../assets/img/Indian Express.png";
import menu5 from "../assets/img/ndtv.png";
import menu6 from "../assets/img/wion.png";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        National
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="DD NEWS" price="" link="https://ddnews.gov.in/en/" />
        <DishesCard img={menu2} title="Hindustan Times" price="" link="https://www.hindustantimes.com/"  />
        <DishesCard img={menu3} title="India Today" price="" link="https://www.indiatoday.in/" />
        <DishesCard img={menu4} title="The Indian Express" price="" link="https://indianexpress.com/" />
        <DishesCard img={menu5} title="NDTV" price=""  link="https://www.ndtv.com/"/>
        <DishesCard img={menu6} title="Wion" price=""  link="https://www.wionews.com/"/>
      </div>
    </div>
  );
};

export default Menu;
