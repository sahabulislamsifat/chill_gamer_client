import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/AuthProvider";
import "./Navbar.css";
import { Typewriter } from "react-simple-typewriter";
import ThemeControl from "../ThemeControl";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <section className="navbar dark:bg-gray-800 dark:text-slate-200 py-3 fixed top-0 bg-base-100 left-0 z-40">
      <div className="container navbar mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dark:bg-gray-800 border-none w-36 gap-1 mr-2 menu dropdown-content bg-base-100 z-[1] mt-4 px-4 shadow text-black"
            >
              <NavLink
                to="/"
                className="border-none text-black btn btn-xs rounded-sm hover:text-green-400 transition duration-300"
              >
                Home
              </NavLink>
              <NavLink
                to="/allReviews"
                className="text-black border-none hover:text-green-400 transition duration-300 btn btn-xs rounded-sm"
              >
                All Reviews
              </NavLink>
              <NavLink
                to="/addReview"
                className="text-black border-none hover:text-green-400 btn btn-xs rounded-sm transition duration-300"
              >
                Add Review
              </NavLink>
              <NavLink
                to="/myReviews"
                className="text-black border-none btn btn-xs rounded-sm hover:text-green-400 transition duration-300"
              >
                My Reviews
              </NavLink>
              <NavLink
                to="/gameWatchList"
                className="text-black border-none btn btn-xs rounded-sm hover:text-green-400 transition duration-300"
              >
                Game WatchList
              </NavLink>
            </ul>
          </div>
          <div>
            <h1 className="text-xl text-gray-600 md:text-2xl">
              {" "}
              <span className="font-bold text-green-500 lg:text-3xl hover:text-green-500 transition-all duration-300">
                𝘾𝙃𝙄𝙇𝙇
              </span>
              <span className="dark:text-slate-200 text-black lg:text-3xl font-semibold hover:text-gray-700 transition-all duration-300">
                𝙂𝘼𝙈𝙀𝙍
              </span>
            </h1>
            <p className="text-xs dark:text-slate-300 italic lg:text-sm text-gray-600">
              <Typewriter
                words={["Victory is sweet when you keep it chill."]}
              ></Typewriter>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            <NavLink
              to="/"
              className=" dark:bg-gray-800 dark:text-slate-200 text-black btn btn-xs rounded-sm hover:text-green-400 border-none transition duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/allReviews"
              className="dark:bg-gray-800 dark:text-slate-200 text-black btn btn-xs rounded-sm hover:text-green-400 border-none transition duration-300"
            >
              All Reviews
            </NavLink>
            <NavLink
              to="/addReview"
              className="dark:bg-gray-800 dark:text-slate-200 text-black btn btn-xs rounded-sm hover:text-green-400 border-none transition duration-300"
            >
              Add Review
            </NavLink>
            <NavLink
              to="/myReviews"
              className="dark:bg-gray-800 dark:text-slate-200 text-black btn btn-xs rounded-sm hover:text-green-400 border-none transition duration-300"
            >
              My Reviews
            </NavLink>
            <NavLink
              to="/gameWatchList"
              className="dark:bg-gray-800 dark:text-slate-200 text-black btn btn-xs rounded-sm hover:text-green-400 border-none transition duration-300"
            >
              Game WatchList
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <ThemeControl></ThemeControl>
          {user ? (
            <div className="dropdown flex items-center dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dark:bg-gray-800 menu-sm dropdown-content bg-base-100 mt-60 rounded-sm w-48 p-2 gap-1"
              >
                <li className="btn btn-xs dark:bg-gray-800 dark:text-slate-200 border-none">
                  {user.displayName}
                </li>
                <li className="btn btn-xs dark:bg-gray-800 dark:text-slate-200 border-none">
                  {user.email}
                </li>
                <li>
                  <Link
                    className="btn btn-xs dark:bg-gray-800 dark:text-slate-200 border-none"
                    to={"/profile"}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-xs dark:bg-gray-800 dark:text-slate-200 border-none"
                    to={"/userSetting"}
                  >
                    Settings
                  </Link>
                </li>
                <li className=" bg-red-500 btn btn-xs border-none text-white hover:bg-red-600 rounded-md">
                  <Link onClick={() => logOut()}>Logout</Link>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to={"/auth/singIn"}
              className="dark:text-slate-200 btn bg-green-600 transition-all duration-300 hover:bg-green-400 text-white hover:text-gray-700 btn-sm border-none rounded-sm"
            >
              Get Started
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
