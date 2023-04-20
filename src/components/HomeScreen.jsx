import React from "react";
import Landing from "./Landing";
import Navbar from "./Navbar";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <div className="landing_wrapper">
        <Landing />
      </div>
    </>
  );
};

export default HomeScreen;
