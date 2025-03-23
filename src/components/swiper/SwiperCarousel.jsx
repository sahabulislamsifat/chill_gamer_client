import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const SwiperCarousel = () => {
  return (
    <section className="w-full dark:bg-gradient-to-l bg-gradient-to-r from-indigo-500 md:px-7 pt-12 md:pb-12 rounded-sm">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-12 items-center">
        {/* Text Section  */}
        <div className="w-11/12 text-center mx-auto md:text-left mb-8 md:mb-0">
          <div>
            <h1 className="text-2xl mb-2 md:text-3xl font-extrabold dark:text-slate-200 text-slate-800">
              Welcome to 𝘾𝙃𝙄𝙇𝙇𝙂𝘼𝙈𝙀
              <br /> — Where
              <span>
                <Typewriter
                  className="text-xs lg:text-2xl"
                  words={[
                    " Discover Games You’ll Love",
                    " Share Your Gaming Experience",
                    " Join a Chill Community",
                    " Browse by Mood or Genre",
                    " Chill Without Limits",
                    " Your Next Favorite Game Awaits",
                  ]}
                ></Typewriter>
              </span>
            </h1>
          </div>
          <p className="dark:text-slate-300 text-gray-800 mb-6">
            A chill gamer is someone who prioritizes relaxation and enjoyment
            over intense competition or high-stakes gameplay. They’re the kind
            of player who hops into a game to unwind after a long day.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/addReview"
              className="btn border-none btn-md bg-green-600 text-slate-200 px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Add Your Review
            </Link>
            <Link
              to="/allReviews"
              className="btn btn-md border-none border-green-600 text-green-600 px-6 py-3 rounded-md hover:bg-green-100 transition"
            >
              Browse Reviews
            </Link>
          </div>
        </div>

        {/* Swiper Section */}
        <div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper rounded-md"
          >
            <SwiperSlide>
              <img
                className="w-full h-[300px] md:h-[409px] object-cover rounded-md"
                src="https://i.ibb.co.com/NV0jVZH/call-of-duty.jpg"
                alt="call of duty"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[300px] lg:h-[409px] object-cover rounded-md"
                src="https://i.ibb.co.com/4V8MDjT/free-Fire-Games.jpg"
                alt="freeFire"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[300px] lg:h-[409px] object-cover rounded-md"
                src="https://i.ibb.co.com/dfZnF52/clashof-Clan.jpg"
                alt="clash of clan"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[300px] lg:h-[409px] object-cover rounded-md"
                src="https://i.ibb.co.com/dJ85HXV/jangle-Run.webp"
                alt="coblin run"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[300px] lg:h-[409px] object-cover rounded-md"
                src="https://i.ibb.co.com/RbLhqxY/pubg.jpg"
                alt="pubg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-[300px] lg:h-[409px] object-cover rounded-md"
                src="https://i.ibb.co.com/RcBswtv/gtav.jpg"
                alt="gta v"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwiperCarousel;
