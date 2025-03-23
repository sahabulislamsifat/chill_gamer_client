import React from "react";
import { useLoaderData } from "react-router-dom";

const ReadMore = () => {
  const data = useLoaderData();

  const { title, image, rating, releasedYear, genres } = data;

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 flex justify-between">
            <div>
              <h1 className="text-2xl font-bold text-black mb-2">{title}</h1>
              <div className="flex gap-3">
                <p className="text-gray-500 text-sm mb-4">
                  Genres: 🎮 {genres}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Rating: ⭐ {rating}
                </p>
              </div>
            </div>
            <div>
              <button
                // onClick={() => }
                className="btn btn-sm mb-3 bg-green-500 rounded-md text-gray-700"
              >
                Add to WatchList
              </button>
              <p className="text-gray-500 text-sm mb-4">
                Published: 📅 {releasedYear}
              </p>
            </div>
          </div>
          <img
            src={image}
            alt="Virtual Reality Adventure"
            className="w-full h-auto p-5 rounded-lg"
          />
          <div className="p-6">
            <p className="text-gray-700 text-sm">Nothing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
