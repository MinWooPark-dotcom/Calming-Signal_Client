import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import img from '../img/landing_top.jpeg'
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing_container">
      <Nav />
      <div className="landing_contents">
        <div className="landing_contents_left">반려견의 목소리가 들리시나요?</div>
      </div>
    </div>
  );
};

export default Landing;
