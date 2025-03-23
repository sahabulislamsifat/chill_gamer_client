import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const AuthLayouts = () => {
  return (
    <section className="dark:bg-gray-800">
      <div className="container mx-auto">
        <nav>
          <Navbar></Navbar>
        </nav>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </section>
  );
};

export default AuthLayouts;
