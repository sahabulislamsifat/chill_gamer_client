import React from "react";
import { useLoaderData } from "react-router-dom";

const GameWatchList = () => {
  const watchData = useLoaderData();

  return (
    <div className="dark:bg-gray-700 min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div
        data-aos="fade-down"
        className="dark:bg-gray-800 dark:text-slate-300 w-full max-w-5xl bg-white shadow-md rounded-lg p-6 sm:p-8"
      >
        <h2 className=" dark:text-slate-300 text-2xl font-bold text-black mb-4 text-center sm:text-left">
          My Watch List
        </h2>
        <p className="text-green-500 mb-6 text-center sm:text-left">
          Discover the best games
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-left text-sm">
            <thead>
              <tr className="dark:bg-gray-600 text-center dark:text-slate-200 bg-gray-100 text-black">
                <th className="p-3 sm:p-4 border border-gray-300">Title</th>
                <th className="p-3 sm:p-4 border border-gray-300">Genres</th>
                <th className="p-3 sm:p-4 border border-gray-300">Ratings</th>
                <th className="p-3 sm:p-4 border border-gray-300">Year</th>
              </tr>
            </thead>
            {watchData ? (
              <tbody className="text-center">
                {watchData.map((watch, index) => (
                  <tr
                    key={index}
                    className=" dark:text-slate-200 hover:text-green-500 hover:bg-gray-600 dark:hover:text-green-600 transition duration-200"
                  >
                    <td className="p-3 sm:p-4 border border-gray-300">
                      {watch?.gameTitle || "N/A"}
                    </td>
                    <td className="p-3 sm:p-4 border border-gray-300">
                      {watch?.select || "N/A"}
                    </td>
                    <td className="p-3 sm:p-4 border border-gray-300">
                      {watch?.rating || "N/A"}
                    </td>
                    <td className="p-3 sm:p-4 border border-gray-300">
                      {watch?.publishingYear || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 sm:p-4 border border-gray-300" colSpan="4">
                    <span className="text-sm text-gray-600 italic block text-center">
                      No items in Watch List
                    </span>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default GameWatchList;
