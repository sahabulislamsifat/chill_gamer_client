import React from "react";
import HighestRatedCard from "../components/card/HighestRatedCard";
import LatestBlogsCard from "../components/card/LatestBlogsCard";
import SwiperCarousel from "../components/swiper/SwiperCarousel";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import ExtraSection from "../components/ExtraSection";

const Home = () => {
  const loadHomeData = useLoaderData();

  return (
    <div>
      {/* Carousel  */}
      <SwiperCarousel></SwiperCarousel>

      {/* Highest Rated Game Section  */}
      <section>
        <h2 className="text-xl text-center my-10 text-indigo-500 font-semibold lg:text-2xl">
          <Typewriter words={["Highest Rated Game Section"]}></Typewriter>
        </h2>
        {/* Card Grid  */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loadHomeData.map((ratedGames) => (
            <HighestRatedCard
              key={ratedGames._id}
              highestRatedCard={ratedGames}
            ></HighestRatedCard>
          ))}
        </div>
      </section>

      {/* Latest Blogs Section  */}
      <section>
        <div className=" my-10 bg-gradient-to-r from-indigo-300 ">
          <h1
            data-aos="flip-down"
            className="text-xl lg:text-2xl text-center font-semibold "
          >
            Latest Blogs
          </h1>
        </div>
        <div>
          <LatestBlogsCard></LatestBlogsCard>
        </div>
      </section>

      {/* Extra Section  */}
      <section>
        <div className=" my-10 bg-gradient-to-l from-indigo-300 ">
          <h1
            data-aos="flip-up"
            className="text-xl lg:text-2xl text-center font-semibold "
          >
            Recently Released Games
          </h1>
        </div>
        <div>
          <ExtraSection></ExtraSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
