import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../utils/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddReview = (event) => {
    event.preventDefault();
    const gameTitle = event.target.gameTitle.value;
    const rating = event.target.rating.value;
    const publishingYear = event.target.publishingYear.value;
    const email = event.target.email.value;
    const name = event.target.name.value;
    const select = event.target.select.value;
    const gameCoverImage = event.target.gameCoverImage.value;
    const reviewDescription = event.target.reviewDescription.value;

    // Input validation
    if (!gameTitle || !rating || !publishingYear || !gameCoverImage) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all required fields.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }
    const addNewReview = {
      gameTitle,
      rating,
      publishingYear,
      email,
      name,
      select,
      gameCoverImage,
      reviewDescription,
    };

    // Send data to the server
    setIsSubmitting(true);
    fetch("https://chill-gamer-server-gamma.vercel.app/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewReview),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.insertedId) {
          const redirectPath = location.state?.from || "/myReviews";
          navigate(redirectPath);
          toast.success("Review Update successful");
        } else {
          throw new Error("Failed to add review.");
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div>
      <div className="dark:bg-gray-700 min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={handleAddReview}
          data-aos="zoom-in"
          className="dark:bg-gray-800 mt-5 dark:text-slate-300 w-full max-w-lg bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-green-500 mb-4">Add Review</h2>
          <p className=" text-gray-500 mb-6 dark:text-slate-400">
            Add a valuable review to help gamers make informed decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Game Title
              </label>
              <input
                type="text"
                name="gameTitle"
                required
                placeholder="Enter Game Title"
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm bg-gray-200 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <input
                type="rating"
                name="rating"
                placeholder="Enter Rating 1 to 5"
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-200 focus:border-transparent"
              />
            </div>
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Publishing Year
              </label>
              <input
                type="text"
                name="publishingYear"
                required
                placeholder="Ex: 2021, 2024"
                className="dark:bg-gray-700 w-full px-3 bg-gray-200 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Genres
              </label>
              <select
                name="select"
                required
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 bg-gray-200 focus:ring-green-500 focus:border-transparent"
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
                className="dark:bg-gray-700 text-sm w-full px-3 bg-gray-200 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                disabled
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="dark:bg-gray-700 w-full text-sm px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 bg-gray-200 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Game Cover Image
              </label>
              <input
                type="url"
                name="gameCoverImage"
                required
                placeholder="A URL for the game cover"
                className="dark:bg-gray-700 bg-gray-200 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="dark:text-slate-300 block text-sm font-medium text-gray-700 mb-1">
                Review Description
              </label>
              <textarea
                placeholder="Enter your review"
                name="reviewDescription"
                rows="5"
                className="dark:bg-gray-700 w-full px-3 py-2 rounded-md shadow-sm focus:outline-none bg-gray-200 focus:ring-1 focus:ring-green-500 focus:border-transparent"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-6 bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 focus:outline-none ${
              isSubmitting && "opacity-50 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
