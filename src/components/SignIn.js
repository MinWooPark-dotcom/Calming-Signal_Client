/* eslint react/prop-types: 0 */

import React, {useState} from 'react';
import NavContainer from '../container/NavContainer';
import './SignIn.css'
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

const SignIn = ({
  isClickedSignInBtn,
  email,
  password,
  emailErrorMsg,
  passwordErrorMsg,
  signInErrorMsg,
  clickSignIn,
  setEmailValue,
  setPasswordValue,
  setEmailErrorMsg,
  setPasswordErrorMsg,
  setSignInErrorMsg,
  eraseEmailErrorMsg,
  erasePasswordErrorMsg,
  eraseSignInErrorMsg,
  isLoggedIn,
  changeLoggedIn,
  history
  }) => {
  console.log("🚀 ~ file: SignIn.js ~ line 29 ~ isLoggedIn", isLoggedIn)
    // const [isClickSignInBtn, setIsClickSignInBtn] = useState(false)
    
    // const [emailInputValue, setEmailInputValue] = useState(null);
    // const [passwordInputValue, setPasswordInputValue] = useState(null);
    
    // const [emailErrorMessage, setEmailErrorMessage] = useState("올바른 이메일 형식이 아닙니다");
    // const [passwordErrorMessage, setPasswordErrorMessage] = useState("8~15자리 사이로 입력해야 합니다");
    // const [errorMessage, setErrorMessage] = useState('아이디 또는 비밀번호를 확인해 주세요');

    const handleInputValue = (key) => (e) => {
        if (key === "email") {
          const emailValue = e.target.value.split("@");
          console.log("🚀 ~ file: SignIn.js ~ line 36 ~ handleInputValue ~ emailValue", emailValue)
          if (emailValue.length !== 2) {
            // setEmailErrorMessage("올바른 이메일 형식이 아닙니다");
            setEmailErrorMsg("올바른 이메일 형식이 아닙니다");
          } else {
            // setEmailErrorMessage(null);
            // setEmailInputValue(e.target.value);
            // console.log("emailInputValue값은?", emailInputValue);
            eraseEmailErrorMsg();
            setEmailValue(e.target.value);
             console.log('email >>>>>',email)
          }
        } else if (key === "password") {
          if (e.target.value.length < 8) {
            // setPasswordErrorMessage("8~15자리 사이로 입력해야 합니다");
            setPasswordErrorMsg("8~15자리 사이로 입력해야 합니다");
          } else {
            // setPasswordErrorMessage(null);
            // setPasswordInputValue(e.target.value);
            // console.log("passwordInputValue값은?", passwordInputValue);
            erasePasswordErrorMsg();
            setPasswordValue(e.target.value);
            console.log('password >>>>', password);
          }
        } 
      };

      const handleOnClickSignInBtn = async () => {
          try{
          // setIsClickSignInBtn(true)
          clickSignIn()
          // if (emailErrorMessage === null && passwordErrorMessage === null) {
            if(emailErrorMsg === null && passwordErrorMsg === null ) {
            const signIn = await axios.post(
                "https://localhost:3002/signin",
                {
                    email,
                    password
                },
                {
                    withCredentials: true,
                }
            );
            console.log('signIn.data.message>>>>',signIn.data.message)
            // setErrorMessage(null)
            eraseSignInErrorMsg();
            changeLoggedIn()
            // history.goBack();
            // 임시 방편, 원래는 뒤로 가기 해야 하는데 회원가입에서 로그인 오면 회원가입으로 돌아가버림
            history.push('/calming-signal');
          } else {
            // setErrorMessage('아이디 또는 비밀번호를 확인해 주세요')
            setSignInErrorMsg('아이디 또는 비밀번호를 확인해 주세요');
          }
      } catch(err) {
        console.error(err)
      }
    }
    return (
        <div className="sign_in_container">
            <NavContainer />
            <div className="sign_in_container_title">Sign in</div>
        <div className="sign_in_box">
            <div className="sign_in_box_id">
                <input className="sign_in_box_input_id" placeholder="Email" onChange={handleInputValue("email")}></input>
            </div>
            <div className="sign_in_box_id_error_message">
                {/* {isClickSignInBtn&&emailErrorMessage? emailErrorMessage:null} */}
                {isClickedSignInBtn&&emailErrorMsg? emailErrorMsg:null}
            </div>
            <div className="sign_in_box_password">
            <input className="sign_in_box_input_password" placeholder="Password" onChange={handleInputValue("password")}></input>
            </div>
            <div className="sign_in_box_password_error_message">
                {/* {isClickSignInBtn&&passwordErrorMessage? passwordErrorMessage:null} */}
                {isClickedSignInBtn&&passwordErrorMsg? passwordErrorMsg:null}
            </div>
            <div className="sign_in_box_sign_in_error_message">
                {/* {isClickSignInBtn&&errorMessage? errorMessage:null} */}
                {isClickedSignInBtn&&signInErrorMsg? signInErrorMsg:null} 
            </div>
            <div className="sign_in_box_sign_in_btn_div">
                <button className="sign_in_box_sign_in_btn" onClick={handleOnClickSignInBtn}>Sign In</button>
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