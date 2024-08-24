import React from 'react';
import DishesCard from "../layouts/DishesCard";
import aljazeeraImg from '../assets/img/aljazeera.png';
import abcnewsImg from '../assets/img/abc.png';
import apnews from '../assets/img/ap.png';
import africanews from '../assets/img/africanews.jpeg';
import bbc from '../assets/img/bbc.jpg';
import cnn from '../assets/img/cnn.jpg';
import dawn from '../assets/img/Dawn_News.jpg';
import rt from '../assets/img/rt.png';
import trt from '../assets/img/trt.png';


const dishes = () => { 
  const dishes = [
    { id: 1, img: aljazeeraImg, title: 'Al Jazeera', price: 'QATAR', link: 'https://www.aljazeera.com/' },
    { id: 2, img: abcnewsImg, title: 'ABC News', price: 'Australia', link: 'https://abcnews.go.com/' },
    { id: 3, img: apnews, title: 'AP News', price: 'USA', link: 'https://apnews.com/' },
    { id: 4, img: africanews, title: 'Africa News', price: 'Africa', link: 'https://www.africanews.com/' },
    { id: 5, img: bbc, title: 'BBC', price: 'UK', link: 'https://www.bbc.com/' },
    { id: 6, img: cnn, title: 'CNN', price: 'USA', link: 'https://edition.cnn.com/' },
    { id: 7, img: dawn, title: 'Dawn', price: 'Pakistan', link: 'https://www.dawn.com/' },
    { id: 8, img: rt, title: 'Russia Today', price: 'Russia', link: 'https://www.rt.com/' },
    { id: 9, img: trt, title: 'TRT', price: 'Turkiye', link: 'https://www.trtworld.com/' },
    
  ];

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {dishes.map((dish) => (
        <DishesCard
          key={dish.id}
          img={dish.img}
          title={dish.title}
          price={dish.price}
          link={dish.link}
        />
      ))}
    </div>
  );
};

export default dishes;
