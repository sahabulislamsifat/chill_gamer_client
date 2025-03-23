import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className=" dark:bg-gray-800  dark:text-slate-300">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="container dark:bg-gray-800 mx-auto pt-20">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
