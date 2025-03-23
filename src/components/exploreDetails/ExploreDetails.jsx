import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ExploreDetails = () => {
  const exploreData = useLoaderData();

  const navigate = useNavigate();
  const location = useLocation();

  const {
    gameTitle,
    rating,
    publishingYear,
    select,
    gameCoverImage,
    reviewDescription,
  } = exploreData;

  const handleWatchList = (event) => {
    event.preventDefault();

    const addNewWatchList = {
      gameTitle,
      rating,
      publishingYear,
      select,
      gameCoverImage,
      reviewDescription,
    };

    // Send data to the server
    fetch("https://chill-gamer-server-gamma.vercel.app/watch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewWatchList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          const redirectPath = location.state?.from || "/gameWatchList";
          navigate(redirectPath);
          toast.success("Successfully Added To Watch List");
        } else {
          throw new Error("Failed to add review.");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
    console.log(addNewWatchList);
  };

  return (
    <div>
      <div className="dark:bg-gray-700 dark:text-slate-200 min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div
          data-aos="zoom-out"
          className="dark:bg-gray-800 dark:text-slate-200 max-w-4xl bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className=" p-6 flex justify-between">
            <div>
              <h1 className="dark:text-slate-200 text-2xl font-bold text-black mb-2">
                {gameTitle}
              </h1>
              <div className="flex gap-3">
                <p className="dark:text-slate-300 text-gray-500 text-sm mb-4">
                  Genres: 🎮 {select}
                </p>
                <p className="dark:text-slate-300 text-gray-500 text-sm mb-4">
                  Rating: ⭐ {rating}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={handleWatchList}
                className="border-none dark:text-slate-300 btn btn-sm mb-3 bg-green-500 rounded-md text-gray-700"
              >
                Add to WatchList
              </button>
              <p className="dark:text-slate-300 text-gray-500 text-sm mb-4">
                Published: 📅 {publishingYear}
              </p>
            </div>
          </div>
          <img
            src={gameCoverImage}
            alt="Virtual Reality Adventure"
            className="w-full h-auto p-5 rounded-lg"
          />
          <div className="p-6">
            <p className="dark:text-slate-300 text-gray-700 text-sm">
              {reviewDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetails;
