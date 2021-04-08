/* eslint react/prop-types: 0 */

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from 'axios'
import "./Nav.css";
import nav_logo from '../img/landing_logo2.png'

const Nav = ({isLoggedIn, clickGoHome, handleLogIn, setEmailValue, setUserNameValue}) => {
console.log("🚀 ~ file: Nav.js ~ line 10 ~ Nav ~ isLoggedIn", isLoggedIn)

  const handleScroll = () => {
    window.scrollTo(0,0)
  }
  
  const handleLogout = async () => {
    const logout = await axios.post('https://localhost:3002/logout',null,{
      withCredentials: true
    })
    console.log("🚀 ~ file: Nav.js ~ line 15 ~ handleLogout ~ logout", logout)
    if (logout.data.message === "Logout completed") {
      handleLogIn()
      setEmailValue(null)
      setUserNameValue(null)
      handleScroll()
    }
  }


  return (
    <div className="nav_container">
      <hr className="nav_logo_line"></hr>
      <Link to="/" onClick={clickGoHome}>
        <div className="nav_logo_text" onClick={handleScroll}>Calming Signal</div>
        {/* <div className="nav_logo_div_img"><img className="nav_logo_div_img" src={nav_logo}></img></div> */}
      </Link>
      {isLoggedIn?(
        <>
          <Link to="/calming-signal">
            <div className="nav_calming_signal_user" onClick={handleScroll}>
              카밍 시그널
            </div>
          </Link>
          <Link to="/board/free?page=1">
            <div className="nav_board_user" onClick={handleScroll}>
              게시판
            </div>
          </Link>
        </>
      )
      :
      (
        <>
          <Link to="/calming-signal">
            <div className="nav_calming_signal_guest" onClick={handleScroll}>
              카밍 시그널
            </div>
          </Link>
          <Link to="/board/free?page=1">
            <div className="nav_board_guest" onClick={handleScroll}> 
              게시판
            </div>
          </Link>
        </>
      )}
      {isLoggedIn?(
        <>
        <Link to="/mypage">
          <div className="nav_mypage" onClick={handleScroll}>
            마이 페이지
          </div>
        </Link>
        <div className="nav_logout" onClick={handleLogout}>
          로그아웃
        </div>
        </>
      )
      :
      (
        <>
      <Link to="/sign-in">
        <div className="nav_login" onClick={handleScroll}>
          로그인
        </div>
      </Link>
      <Link to="/sign-up">
        <div className="nav_sign_up" onClick={handleScroll}>
          회원가입
        </div>
      </Link>
      </>
      )}
    </div>
  );
};

export default Nav;
