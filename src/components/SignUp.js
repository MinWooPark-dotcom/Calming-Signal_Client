/* eslint react/prop-types: 0 */


import React, {useState} from 'react';
import NavContainer from '../container/NavContainer';
import { Link, withRouter } from "react-router-dom";
import './SignUp.css'
import axios from 'axios'

const SignUp = ({history}) => {
    const [isClickSignUpnBtn, setIsClickSignUpBtn] = useState(false)
    
    const [usernameInputValue, setUsernameInputValue] = useState(null);
    const [emailInputValue, setEmailInputValue] = useState(null);
    const [passwordInputValue, setPasswordInputValue] = useState(null);
    const [petNameInputValue, setPetNameInputValue] = useState('');    
    const [petBreedInputValue, setPetBreedInputValue] = useState('');
    
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("이름을 입력해 주세요.");
    const [emailErrorMessage, setEmailErrorMessage] = useState("올바른 이메일 형식이 아닙니다");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("8~15자리 사이로 입력해야 합니다");
    const [petErrorMessage, setPetErrorMessage] = useState("반려견 정보 입력 시 이름과 견종 모두 입력해야 합니다");
    
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
            console.log('e.target.value',e.target.value)
            setPasswordErrorMessage("8~15자리 사이로 입력해야 합니다");
          } else {
            console.log('e.target.value',e.target.value)
            setPasswordErrorMessage(null);
            setPasswordInputValue(e.target.value);
            console.log("passwordInputValue값은?", passwordInputValue);
          }
        } else if (key === 'petName') {
            if(e.target.value.length === 0) {
              setPetNameInputValue(null)  
            }
            setPetNameInputValue(e.target.value)
            
        } else if (key === 'petBreed')  {
          if(e.target.value.length === 0) {
            setPetBreedInputValue(null)
          }
          setPetBreedInputValue(e.target.value)
        }
      };

      const handleOnClickSignUpBtn = async () => {
        try{
            setIsClickSignUpBtn(true)
        if((petNameInputValue && !petBreedInputValue) || (!petNameInputValue && petBreedInputValue)) {
          setPetErrorMessage("반려견 정보 입력 시 이름과 견종 모두 입력해야 합니다")
        }
        else if((petNameInputValue && petBreedInputValue) || (!petNameInputValue && !petBreedInputValue)) {
          setPetErrorMessage(null)
        }

        if (usernameErrorMessage === null && emailErrorMessage === null && passwordErrorMessage === null && petNameInputValue !== null && petBreedInputValue !== null) {
          const signUp = await axios.post(
              "https://localhost:3002/signup",
              {
                  name: usernameInputValue,
                  email: emailInputValue,
                  password: passwordInputValue,
                  petName: petNameInputValue,
                  petBreed: petBreedInputValue
              },
              {
                  withCredentials: true,
              }
          );
          console.log("🚀 ~ file: SignUp.js ~ line 59 ~ handleOnClickSignUpBtn ~ signUp", signUp)
          
          if(signUp) {
            window.alert('회원가입이 완료 되었습니다.')      
            history.push('/sign-in')
          } 
        } else if (usernameErrorMessage === null && emailErrorMessage === null && passwordErrorMessage === null && petNameInputValue.length === 0 && petBreedInputValue.length === 0) {
                 const signUp = await axios.post(
              "https://localhost:3002/signup",
              {
                  name: usernameInputValue,
                  email: emailInputValue,
                  password: passwordInputValue,
              },
              {
                  withCredentials: true,
              }
          );
          console.log("🚀 ~ file: SignUp.js ~ line 59 ~ handleOnClickSignUpBtn ~ signUp", signUp)
          
          if(signUp) {
            window.alert('회원가입이 완료 되었습니다.')      
            history.push('/sign-in')
          } 
        }
    } catch(err) {
      console.error(err)
      window.alert('이미 존재하는 아이디입니다.')   
    }
  }

    return (
    <div className="sign_up_container">
      <NavContainer />
      <div className="sign_up_container_title">Sign up</div>
      <div className="sign_up_box_notice">*표시는 필수입력입니다.</div>
      {/* 회원가입 박스 */}
      <div className="sign_up_box">
      {/* 이름 */}
        <div className="sign_up_box_name_sign">이름 *</div>
        <div className="sign_up_box_name">
            <input className="sign_up_box_input_name" placeholder="User name" onChange={handleInputValue('username')}></input>
        </div>
        <div className="sign_up_box_name_error_message">
            {isClickSignUpnBtn? usernameErrorMessage : null}
        </div>
        {/* 아이디 */}
        <div className="sign_up_box_id_sign">아이디 *</div>
        <div className="sign_up_box_id">
            <input className="sign_up_box_input_id" placeholder="Email" onChange={handleInputValue('email')}></input>
        </div>
        <div className="sign_up_box_id_error_message">
            {isClickSignUpnBtn? emailErrorMessage : null}
        </div>
        {/* 비밀번호 */}
        <div className="sign_up_box_password_sign">비밀번호 *</div>
        <div className="sign_up_box_password">
        <input className="sign_up_box_input_password" placeholder="Password" onChange={handleInputValue('password')}></input>
        </div>
        <div className="sign_up_box_password_error_message">
            {isClickSignUpnBtn? passwordErrorMessage : null}
        </div>
        {/* 반려견 이름 */}
        <div className="sign_up_box_pet_name_sign">반려견 이름</div>
        <div className="sign_up_box_pet_name">
          <input className="sign_up_box_input_pet_name" placeholder="pet name" onChange={handleInputValue('petName')}></input>
        </div>
        {/* 임시 띄어씌기 용 */}
        <div></div>
        {/* 견종 */}
        <div className="sign_up_box_pet_breed_sign">견종</div>
        <div className="sign_up_box_pet_breed">
          <input className="sign_up_box_select_pet_breed" list="choices" placeholder="breed" onChange={handleInputValue('petBreed')}/>
            <datalist id="choices" >
              <option value="말티즈">말티즈</option>
              <option value="요크셔테리어">요크셔테리어</option>
              <option value="푸들">푸들</option>
              <option value="포메라니안">포메라니안</option>
              <option value="치와와">치와와</option>
              <option value="닥스훈트">닥스훈트</option>
              <option value="시츄">시츄</option>
            {/* 중형견 */}
              <option value="슈나우저">슈나우저</option>
              <option value="웰시코기">웰시코기</option>
              <option value="비글">비글</option>
              <option value="보더콜리">보더콜리</option>
            {/* 대형견 */}
              <option value="진돗개">진돗개</option>
              <option value="시베리안 허스키">시베리안 허스키</option>
              <option value="리트리버">리트리버</option>
              <option value="셰퍼드">셰퍼드</option>
              <option value="말라뮤트">말라뮤트</option>
              <option value="그레이 하운드">그레이 하운드</option>
            </datalist>
        </div>
        <div className="sign_up_box_pet_error_message">
            {isClickSignUpnBtn? petErrorMessage : null}
        </div>
        {/* 회원가입 버튼 */}
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

export default withRouter(SignUp);