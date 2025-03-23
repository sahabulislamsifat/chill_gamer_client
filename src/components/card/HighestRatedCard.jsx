import React from "react";
import { Link } from "react-router-dom";

const HighestRatedCard = ({ highestRatedCard }) => {
  const { gameTitle, rating, publishingYear, select, gameCoverImage } =
    highestRatedCard;
  return (
    <div>
      <div
        data-aos="flip-up"
        className="dark:bg-gray-800 dark:border-slate-700 border max-w-xs mx-auto bg-white rounded-md shadow-md overflow-hidden"
      >
        <img
          className="w-full h-48 object-cover"
          src={gameCoverImage}
          alt="Card"
        />
        <div className="p-4">
          <h2 className="dark:text-slate-300 text-xl font-bold mb-2">
            {gameTitle}
          </h2>
          <div className="dark:text-slate-300 text-sm text-gray-500 flex justify-between items-center mb-2">
            <span>Rating: ⭐ {rating}</span>
            <span>📅 {publishingYear}</span>
          </div>
          <div className="dark:text-slate-300 text-gray-700 text-sm mb-4">
            Genres: 🎮 {select}
          </div>
          <Link
            to={`/exploreDetails/${highestRatedCard._id}`}
            href="#"
            className="block text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighestRatedCard;
