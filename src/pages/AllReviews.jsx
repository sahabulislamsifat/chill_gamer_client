import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [sortedReviews, setSortedReviews] = useState([]);
  const [filterGenre, setFilterGenre] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all reviews from server
    fetch("https://chill-gamer-server-gamma.vercel.app/games")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setSortedReviews(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  // Handle sorting
  const handleSort = (option) => {
    const sorted = [...reviews].sort((a, b) => {
      if (option === "rating") {
        return b.rating - a.rating;
      } else if (option === "year") {
        return b.publishingYear - a.publishingYear;
      }
      return 0;
    });
    setSortedReviews(sorted);
  };

  // Handle filtering
  const handleFilter = (genre) => {
    setFilterGenre(genre);
    if (genre === "") {
      setSortedReviews(reviews);
    } else {
      const filtered = reviews.filter((review) => review.select === genre);
      setSortedReviews(filtered);
    }
  };

  return (
    <div className="dark:bg-gray-800 dark:text-slate-200 p-4 sm:p-6 lg:p-8">
      <div className=" dark:bg-gray-800 max-w-screen mx-auto bg-white shadow-sm rounded-md p-6">
        {/* Header Section */}
        <div className=" flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="dark:bg-gray-800 dark:text-slate-200 text-2xl font-bold text-gray-800">
            All Reviews
          </h2>
          {/* Controls */}
          <div className="flex flex-wrap gap-4">
            <select
              onChange={(e) => handleSort(e.target.value)}
              className="dark:bg-gray-800 dark:text-slate-200 py-2 border rounded-sm shadow-sm  focus:ring-green-500"
            >
              <option selected disabled value="">
                Sort By
              </option>
              <option value="rating">Rating (High to Low)</option>
              <option value="year">Year (Newest First)</option>
            </select>
            <select
              onChange={(e) => handleFilter(e.target.value)}
              className="dark:bg-gray-800 dark:text-slate-200 py-2 border rounded-sm shadow-sm  focus:ring-green-500"
            >
              <option selected disabled value="">
                Filter By Genre
              </option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
              <option value="Shooter">Shooter</option>
            </select>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedReviews.map((review) => (
            <div
              key={review._id}
              data-aos="flip-left"
              className="dark:bg-gray-800 dark:border-slate-700 border max-w-xs mx-auto bg-white rounded-md shadow-md overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={review.gameCoverImage}
                alt={review.gameTitle}
              />
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-bold mb-2">
                  {review.gameTitle}
                </h2>
                <div className="dark:text-slate-300 text-xs sm:text-sm text-gray-500 flex justify-between items-center mb-2">
                  <span>Rating: ⭐ {review.rating}</span>
                  <span>📅 {review.publishingYear}</span>
                </div>
                <div className="dark:text-slate-300 text-sm sm:text-base text-gray-700 mb-4">
                  Genres: 🎮 {review.select}
                </div>
                <Link
                  to={`/exploreDetails/${review._id}`}
                  className="block text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-6 text-center text-red-500">
            Failed to load reviews: {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReviews;
