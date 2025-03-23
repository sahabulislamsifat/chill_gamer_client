import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className=" h-screen">
      <div className="dark:bg-gray-800 dark:text-slate-300 flex flex-col justify-center items-center h-screen text-slate-800 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Oops! Page Not Found</h1>
        <p className="text-lg font-semibold mb-6">
          Looks like your review took a vacation. Let's get it back!
        </p>
        <div className="flex justify-center">
          <Link
            to={"/"}
            className="dark:text-slate-300 px-6 py-3 text-lg font-bold text-slate-900 bg-indigo-500 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            👈 Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
