import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import './Nav.css';

const Nav = ({
  isLoggedIn,
  setEmailValue,
  setUserNameValue,
  changeLoggedInStateAction,
  history,
}) => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  const handleLogout = async () => {
    const logout = await axios.post(
      'https://server.calming-signal.ml/logout',
      null,
      {
        withCredentials: true,
      }
    );

    if (logout.data.message === 'Logout completed') {
      changeLoggedInStateAction();
      setEmailValue(null);
      setUserNameValue(null);
      handleScroll();
      sessionStorage.clear();
      history.push('/');
    }
  };

  return (
    <div className="nav_container">
      <hr className="nav_logo_line"></hr>
      <Link to="/" onClick={handleScroll}>
        <div className="nav_logo_text" onClick={handleScroll}>
          Calming Signal
        </div>
      </Link>
      {isLoggedIn ? (
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
      ) : (
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
      {isLoggedIn ? (
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
      ) : (
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

export default withRouter(Nav);
