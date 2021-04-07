/* eslint react/prop-types: 0 */

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.css";


const Nav = ({isToggeld, clickGoHome, clickHamburger, setFirstNum}) => {

  const handleOnClick = () => {
    clickHamburger()
  }

  return (
    <div className="nav_container">
      <hr className="nav_logo_line"></hr>
      <Link to="/" onClick={clickGoHome}>
        <div className="nav_logo">Calming Signal</div>
      </Link>
      <Link to="/calming-signal">
        <div className="nav_calming_signal">
          카밍 시그널
        </div>
      </Link>
      <Link to="/board">
        <div className="nav_board">
          게시판
        </div>
      </Link>
      <Link to="/sign-in">
        <div className="nav_login">
          로그인
        </div>
      </Link>
      <Link to="/sign-up">
        <div className="nav_sign_up">
          회원가입
        </div>
      </Link>
    </div>
  );
};

export default Nav;
