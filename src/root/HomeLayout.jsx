import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="container">
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
