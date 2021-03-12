import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.css";


const Nav = () => {
  const [isToggled, setToggled] = useState(false)

  const handleOnClick = () => {
    setToggled(!isToggled)
  }

  return (
    <div className="nav_container">
      <div className="nav_logo_line"></div>
      <div className="nav_logo">Calming Signal</div>
      <div className="nav_text">We're talking on the calming signal.</div>
      <div className={isToggled? "nav_toggle":"nav_hamburger"} onClick={handleOnClick}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      </div>
    </div>
  );
};

export default Nav;
