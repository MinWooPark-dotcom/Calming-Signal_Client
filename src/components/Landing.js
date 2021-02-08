import React from "react";
import Nav from "./Nav";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing_container">
      <Nav />
      <div className="landing_slide1">
        <div className="landing_slide1_left">
          당신의 반려견의 목소리가 들리시나요? ~~~설명
        </div>
        <div className="landing_slide1_right">img</div>
      </div>
    </div>
  );
};

export default Landing;
