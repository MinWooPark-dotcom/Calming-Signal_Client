import React, {useState} from 'react';
import NavContainer from '../container/NavContainer';
import { Link, withRouter } from "react-router-dom";
import './SignUp.css'
import axios from 'axios'

const SignUp = () => {
    const [isClickSignUpnBtn, setIsClickSignUpBtn] = useState(false)
    
    const [usernameInputValue, setUsernameInputValue] = useState(null);
    const [emailInputValue, setEmailInputValue] = useState(null);
    const [passwordInputValue, setPasswordInputValue] = useState(null);
    
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("이름을 입력해 주세요.");
    const [emailErrorMessage, setEmailErrorMessage] = useState("올바른 이메일 형식이 아닙니다");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("8~15자리 사이로 입력해야 합니다");
    
    const handleInputValue = (key) => (e) => {
        if (key === "username" && e.target.value !== undefined) {
                setUsernameErrorMessage(null);
                setUsernameInputValue(e.target.value)
                console.log('usernameInputValue값은?', usernameInputValue)
          }
        else if (key === "email") {
          const emailValue = e.target.value.split("@");
          if (emailValue.length !== 2) {
            setEmailErrorMessage("올바른 이메일 형식이 아닙니다");
          } else {
            setEmailErrorMessage(null);
            setEmailInputValue(e.target.value);
            console.log("emailInputValue값은?", emailInputValue);
          }
        } else if (key === "password") {
          if (e.target.value.length < 8) {
            setPasswordErrorMessage("8~15자리 사이로 입력해야 합니다");
          } else {
            setPasswordErrorMessage(null);
            setPasswordInputValue(e.target.value);
            console.log("passwordInputValue값은?", passwordInputValue);
          }
        } 
      };

      const handleOnClickSignUpBtn = async () => {
        try{
            setIsClickSignUpBtn(true)
        if (usernameErrorMessage === null && emailErrorMessage === null && passwordErrorMessage === null) {
          const signUp = await axios.post(
              "http://localhost:3002/signup",
              {
                  name: usernameInputValue,
                  email: emailInputValue,
                  password: passwordInputValue
              },
              {
                  withCredentials: true,
              }
          );
          console.log('signUp.data.message>>>', signUp.data.message)
          // setErrorMessage(null)
        } 
        // else {
        //   setErrorMessage('아이디 또는 비밀번호를 확인해 주세요')
        // }
    } catch(err) {
      console.error(err)
        //   setErrorMessage('아이디 또는 비밀번호를 확인해 주세요')
        window.alert('이미 존재하는 아이디입니다.')
    }
  }

    return (
        <div className="sign_up_container">
        <NavContainer />
        <div className="sign_up_container_title">Sign up</div>
    <div className="sign_up_box">
    <div className="sign_up_box_name">
            <input className="sign_up_box_input_name" placeholder="User name" onChange={handleInputValue('username')}></input>
        </div>
        <div className="sign_up_box_name_error_message">
            {isClickSignUpnBtn? usernameErrorMessage : null}
        </div>
        <div className="sign_up_box_id">
            <input className="sign_up_box_input_id" placeholder="Email" onChange={handleInputValue('email')}></input>
        </div>
        <div className="sign_up_box_id_error_message">
            {isClickSignUpnBtn? emailErrorMessage : null}
        </div>
        <div className="sign_up_box_password">
        <input className="sign_up_box_input_password" placeholder="Password" onChange={handleInputValue('password')}></input>
        </div>
        <div className="sign_up_box_password_error_message">
            {isClickSignUpnBtn? passwordErrorMessage : null}
        </div>
        <div className="sign_up_box_create_btn_div">
            <button className="sign_up_box_create_btn" onClick={handleOnClickSignUpBtn}>회원가입</button>
        </div>
        <div className="sign_up_box_hr"></div>
        <div className="sign_up_box_already_have">
            <Link to="/sign-in">
            <div className="sign_up_box_already_have_text">이미 아이디가 있으신가요?</div>
            </Link>
        </div>
    </div>
</div>
    )
};

export default SignUp;