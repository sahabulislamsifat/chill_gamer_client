import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthLayouts from "../layouts/AuthLayouts";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import AllReviews from "../pages/AllReviews";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import GameWatchList from "../pages/GameWatchList";
import ReadMore from "../components/readMore/ReadMore";
import ExploreDetails from "../components/exploreDetails/ExploreDetails";
import Profile from "../components/userProfile/Profile";
import UserSetting from "../components/userProfile/UserSetting";
import ResetPassword from "../components/userProfile/ResetPassword";
import UpdateReview from "../components/updateReview/UpdateReview";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../components/PageNotFound";
import AboutDev from "../components/AboutDev";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://chill-gamer-server-gamma.vercel.app/games/homeData"),
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
        loader: () =>
          fetch("https://chill-gamer-server-gamma.vercel.app/games"),
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-gamma.vercel.app/games/update/${params.id}`
          ),
      },
      {
        path: "/gameWatchList",
        element: (
          <PrivateRoute>
            <GameWatchList></GameWatchList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://chill-gamer-server-gamma.vercel.app/watch"),
      },
      {
        path: "/exploreDetails/:id",
        element: <ExploreDetails></ExploreDetails>,
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-gamma.vercel.app/games/details/${params.id}`
          ),
      },
      {
        path: "/readMore",
        element: <ReadMore></ReadMore>,
        loader: () => fetch("../../public/data.json"),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/userSetting",
        element: <UserSetting></UserSetting>,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword></ResetPassword>,
      },
      {
        path: "/aboutDev",
        element: <AboutDev></AboutDev>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayouts></AuthLayouts>,
    children: [
      {
        path: "/auth/singUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/auth/singIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default Router;
