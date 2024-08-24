import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard review="I have been using NewsWeb for the past few months, and it has quickly become my go-to source for both international and national news. The layout is clean and user-friendly, making it easy to navigate through different sections. I especially appreciate how the site curates top stories from around the world alongside important national news. It's a one-stop-shop for all my news needs. Highly recommended!" img={img1} name="Sophia Azura" />
        <ReviewCard review="NewsWeb is a fantastic platform for staying updated with the latest happenings both globally and locally. I love the way the website seamlessly integrates international news with national headlines on a single page. It saves me so much time as I don't have to switch between multiple sites. The articles are well-written and informative. My only suggestion would be to add more interactive elements like live discussions or Q&A sessions with journalists. Overall, a great site for news enthusiasts!" img={img2} name="John Deo" />
        <ReviewCard review="Stumbling upon NewsWeb has been a game-changer for me. As someone who follows both international and national news closely, having everything consolidated in one place is incredibly convenient. The site loads quickly, and the content is up-to-date and reliable. I also appreciate the balanced coverage and diverse perspectives presented. Whether it's breaking news or in-depth analysis, NewsWeb delivers. It's a must-visit for anyone who wants to stay informed." img={img3} name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Review;
