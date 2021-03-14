import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.css";


const Nav = ({isToggeld, clickGoHome, clickHamburger, setFirstNum}) => {

  const handleOnClick = () => {
    clickHamburger()
  }

  return (
    <div className="nav_container">
      <div className="nav_logo_line"></div>
      <Link to="/" onClick={clickGoHome}>
      <div className="nav_logo">Calming Signal</div>
      </Link>
      {/* <div className="nav_text">We're talking on the calming signal</div> */}
      <div className={isToggeld? "nav_toggle":"nav_hamburger"} onClick={handleOnClick}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      </div>
    </div>
  );
};

export default Nav;
