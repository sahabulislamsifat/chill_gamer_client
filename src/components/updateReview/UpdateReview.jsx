import React, { useContext } from "react";
import { AuthContext } from "../../utils/AuthProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const loadUpdateData = useLoaderData();
  const {
    _id,
    gameTitle,
    rating,
    publishingYear,
    name,
    select,
    gameCoverImage,
    reviewDescription,
  } = loadUpdateData;

  const location = useLocation();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const gameTitle = event.target.gameTitle.value;
    const rating = event.target.rating.value;
    const publishingYear = event.target.publishingYear.value;
    const email = event.target.email.value;
    const name = event.target.name.value;
    const select = event.target.select.value;
    const gameCoverImage = event.target.gameCoverImage.value;
    const reviewDescription = event.target.reviewDescription.value;

    const gameReviewUpdate = {
      gameTitle,
      rating,
      publishingYear,
      email,
      name,
      select,
      gameCoverImage,
      reviewDescription,
    };

    fetch(`https://chill-gamer-server-gamma.vercel.app/games/update/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameReviewUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
        }
        const redirectPath = location.state?.form || "/myReviews";
        navigate(redirectPath);
        toast.success("Review Update successful");
      });
  };

  return (
    <div>
      <div className="dark:bg-gray-700 min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={handleUpdate}
          data-aos="zoom-out"
          className="dark:bg-gray-800 w-full max-w-lg bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-green-500 mb-4">
            Update Review
          </h2>
          <p className="dark:text-slate-400 text-gray-500 mb-6">
            Update a valuable review to help gamers make informed decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Game Title
              </label>
              <input
                type="text"
                name="gameTitle"
                placeholder="Enter Game Title"
                defaultValue={gameTitle}
                className="bg-gray-200 dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <input
                type="rating"
                name="rating"
                defaultValue={rating}
                placeholder="Enter Rating 1 to 5"
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent bg-gray-200"
              />
            </div>
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Publishing Year
              </label>
              <input
                type="text"
                defaultValue={publishingYear}
                name="publishingYear"
                placeholder="Ex: 2021, 2024"
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent bg-gray-200"
              />
            </div>
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Genres
              </label>
              <select
                name="select"
                defaultValue={select}
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent bg-gray-200"
              >
                <option disabled selected>
                  Select Genres
                </option>
                <option>Action</option>
                <option>Adventure</option>
                <option>RPG</option>
                <option>Shooter</option>
              </select>
            </div>
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                placeholder="Enter your email"
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent bg-gray-200"
              />
            </div>
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                disabled
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent bg-gray-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Game Cover Image
              </label>
              <input
                type="url"
                defaultValue={gameCoverImage}
                name="gameCoverImage"
                placeholder="A URL for the game cover"
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent bg-gray-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Review Description
              </label>
              <textarea
                placeholder="Enter your review"
                name="reviewDescription"
                defaultValue={reviewDescription}
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent bg-gray-200"
                rows="5"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
