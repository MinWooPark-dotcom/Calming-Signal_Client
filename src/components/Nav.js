import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav_container">
      <Link to="/" className="nav_link_logo">
        <div className="nav_logo">Calming Signal</div>
      </Link>
      {/* <Link to="about" className="nav_link_about"> */}
      {/* <div className="nav_about">소개</div> */}
      {/* </Link> */}
      <Link to="calming-signal" className="nav_link_calming_signal">
        <div className="nav_calming_signal">카밍 시그널</div>
      </Link>
      <Link to="board" className="nav_link_board">
        <div className="nav_board">게시판</div>
      </Link>
      <Link to="mypage" className="nav_link_mypage">
        <div className="nav_mypage">마이페이지</div>
      </Link>
      <Link to="sign-in" className="nav_link_sign_in">
        <div className="nav_sign_in">Sign In</div>
      </Link>
    </div>
  );
};

export default Nav;
