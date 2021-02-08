import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_logo">Calming Signal</div>
      <div className="nav_about">소개</div>
      <div className="nav_calming_signal">카밍 시그널</div>
      <div className="nav_board">게시판</div>
      <div className="nav_mypage">마이페이지</div>
      <div className="nav_sign_in">Sign In</div>
    </div>
  );
};

export default Nav;
