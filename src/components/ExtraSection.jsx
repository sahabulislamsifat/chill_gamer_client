import React from "react";
import ReactPlayer from "react-player";

const ExtraSection = () => {
  return (
    <div className="mb-10 dark:bg-gray-800 flex flex-col lg:flex-row bg-base-100  py-5 gap-5">
      <div className="w-full lg:w-2/3 h-52 lg:h-96 mx-auto">
        <ReactPlayer
          url="https://youtu.be/oq2Rz2I11l0?si=yTRkq-lsELzxDIJH"
          playing
          loop
          muted
          width="100%"
          height="100%"
        ></ReactPlayer>
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="lg:w-1/3 px-2 space-y-5 lg:mt-24"
      >
        <h1 className="text-xl lg:text-4xl font-semibold">
          Free Fire: A Thrilling Battle Royale Experience
        </h1>
        <p className="lg:text-xl">
          Free Fire is a fast-paced battle royale game developed by Garena that
          has taken the mobile gaming world by storm. Designed for quick,
          action-packed matches, Free Fire pits 50 players against each other on
          a shrinking battlefield, with the ultimate goal of being the last one
          standing.
        </p>
      </div>
    </div>
  );
};

export default ExtraSection;
