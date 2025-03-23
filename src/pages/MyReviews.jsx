import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../utils/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://chill-gamer-server-gamma.vercel.app/games/${user.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => setError(err.message));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-gamma.vercel.app/games/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });
              const remaining = reviews.filter((review) => review._id !== id);
              setReviews(remaining);
            }
          })
          .catch((err) => {
            console.log("Error deleting review:", err);
          });
      }
    });
  };

  return (
    <div className="dark:bg-gray-700 bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="dark:text-slate-300 dark:bg-gray-800  w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 sm:p-8"
      >
        <h2 className="dark:text-slate-300 text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">
          My Reviews
        </h2>
        <p className="text-green-500 mb-6 text-center sm:text-left">
          Discover the best games you reviewed!
        </p>
        {error ? (
          <p className="text-red-500 font-medium text-center">{error}</p>
        ) : reviews.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="dark:text-slate-300 w-full border border-gray-300 text-sm text-gray-800">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-600 dark:text-slate-200">
                  <th className="p-3 sm:p-4 border border-gray-300">Title</th>
                  <th className="p-3 sm:p-4 border border-gray-300">Genres</th>
                  <th className="p-3 sm:p-4 border border-gray-300">Ratings</th>
                  <th className="p-3 sm:p-4 border border-gray-300">Year</th>
                  <th className="p-3 sm:p-4 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {reviews.map((review, index) => (
                  <tr
                    key={index}
                    className="dark:text-slate-200 transition duration-200"
                  >
                    <td className="p-3 sm:p-4 border border-gray-300">
                      {review?.gameTitle || "N/A"}
                    </td>
                    <td className="p-3 sm:p-4 border border-gray-300">
                      {review?.select || "N/A"}
                    </td>
                    <td className="p-3 sm:p-4 border border-gray-300">
                      {review?.rating || "N/A"}
                    </td>
                    <td className="p-3 sm:p-4 border border-gray-300">
                      {review?.publishingYear || "N/A"}
                    </td>
                    <td className="p-3 sm:p-4 border border-gray-300">
                      <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Link
                          to={`/updateReview/${review._id}`}
                          className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition text-sm"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleDelete(review._id)}
                          className="text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 italic text-center">No reviews found.</p>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
