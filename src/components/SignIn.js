import React, { useState } from 'react';
import NavContainer from '../container/NavContainer';
import './SignIn.css';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

const SignIn = ({
  isClickedSignInBtn,
  email,
  password,
  emailErrorMsg,
  passwordErrorMsg,
  signInErrorMsg,
  clickSignIn,
  setEmailValue,
  setUserNameValue,
  setPasswordValue,
  setEmailErrorMsg,
  setPasswordErrorMsg,
  setSignInErrorMsg,
  eraseEmailErrorMsg,
  erasePasswordErrorMsg,
  eraseSignInErrorMsg,
  changeLoggedIn,
  setPetNameValue,
  setPetBreedValue,
  locationName,
  setLocationValue,
  history,
}) => {
  const handleInputValue = (key) => (e) => {
    if (key === 'email') {
      const emailValue = e.target.value.split('@');
      if (emailValue.length !== 2) {
        setEmailErrorMsg('올바른 이메일 형식이 아닙니다');
      } else {
        eraseEmailErrorMsg();
        setEmailValue(e.target.value);
      }
    } else if (key === 'password') {
      if (e.target.value.length < 8) {
        setPasswordErrorMsg('8~15자리 사이로 입력해야 합니다');
      } else {
        erasePasswordErrorMsg();
        setPasswordValue(e.target.value);
      }
    }
  };

  const handleOnClickSignInBtn = async () => {
    try {
      clickSignIn();
      if (emailErrorMsg === null && passwordErrorMsg === null) {
        try {
          const signIn = await axios.post(
            'https://server.calming-signal.ml/signin',
            {
              email,
              password,
            },
            {
              withCredentials: true,
            }
          );
          eraseSignInErrorMsg();
          changeLoggedIn();

          // get user info
          const userInfo = await axios(
            'https://server.calming-signal.ml/userinfo',
            {
              withCredentials: true,
            }
          );
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('name', userInfo.data.name);
          if (userInfo.data.petName) {
            sessionStorage.setItem('petName', userInfo.data.petName);
          }
          if (userInfo.data.petBreed) {
            sessionStorage.setItem('petBreed', userInfo.data.petBreed);
          }
          if (userInfo.data.location) {
            sessionStorage.setItem('location', userInfo.data.location);
          }
          setUserNameValue(userInfo.data.name);
          setPasswordValue(null);
          setPetNameValue(userInfo.data.petName);
          setPetBreedValue(userInfo.data.petBreed);
          setLocationValue(userInfo.data.location);
          history.push('/calming-signal');
        } catch (err) {
          alert('아이디 또는 비밀번호를 확인해 주세요');
        }
      } else {
        setSignInErrorMsg('아이디 또는 비밀번호를 확인해 주세요');
        alert('아이디 또는 비밀번호를 확인해 주세요');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sign_in_container">
      <NavContainer />
      <div className="sign_in_container_title">Sign in</div>
      <div className="sign_in_box">
        <div className="sign_in_box_id">
          <input
            className="sign_in_box_input_id"
            placeholder="Email"
            onChange={handleInputValue('email')}
            autoFocus
            type="email"
          ></input>
        </div>
        <div className="sign_in_box_id_error_message">
          {isClickedSignInBtn && emailErrorMsg ? emailErrorMsg : null}
        </div>
        <div className="sign_in_box_password">
          <input
            className="sign_in_box_input_password"
            placeholder="Password"
            onChange={handleInputValue('password')}
            type="password"
          ></input>
        </div>
        <div className="sign_in_box_password_error_message">
          {isClickedSignInBtn && passwordErrorMsg ? passwordErrorMsg : null}
        </div>
        <div className="sign_in_box_sign_in_error_message">
          {isClickedSignInBtn && signInErrorMsg ? signInErrorMsg : null}
        </div>
        <div className="sign_in_box_sign_in_btn_div">
          <button
            className="sign_in_box_sign_in_btn"
            onClick={handleOnClickSignInBtn}
          >
            Sign In
          </button>
        </div>
        <div className="sign_in_box_forget">
          <div className="sign_in_box_forget_id">아이디 찾기</div>
          <div className="sign_in_box_forget_password">비밀번호 찾기</div>
        </div>
        <div className="sign_in_box_hr"></div>
        <div className="sign_in_box_create_btn_div">
          <Link to="/sign-up">
            <button className="sign_in_box_create_btn">회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
