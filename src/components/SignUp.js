import React, { useState } from 'react';
import NavContainer from '../container/NavContainer';
import { Link, withRouter } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';

const SignUp = ({ history }) => {
  const [city, setCity] = useState(null);
  const [isClickSignUpnBtn, setIsClickSignUpBtn] = useState(false);
  const [usernameInputValue, setUsernameInputValue] = useState(null);
  const [emailInputValue, setEmailInputValue] = useState(null);
  const [passwordInputValue, setPasswordInputValue] = useState(null);
  const [petNameInputValue, setPetNameInputValue] = useState('');
  const [petBreedInputValue, setPetBreedInputValue] = useState('');

  const [usernameErrorMessage, setUsernameErrorMessage] = useState(
    '이름을 입력해 주세요.'
  );
  const [emailErrorMessage, setEmailErrorMessage] = useState(
    '올바른 이메일 형식이 아닙니다'
  );
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(
    '8~15자리 사이로 입력해야 합니다'
  );
  const [petErrorMessage, setPetErrorMessage] = useState(
    '반려견 정보 입력 시 이름과 견종 모두 입력해야 합니다'
  );

  const handleInputValue = (key) => (e) => {
    if (key === 'username' && e.target.value !== undefined) {
      setUsernameErrorMessage(null);
      setUsernameInputValue(e.target.value);
    } else if (key === 'email') {
      const emailValue = e.target.value.split('@');
      if (emailValue.length !== 2) {
        setEmailErrorMessage('올바른 이메일 형식이 아닙니다');
      } else {
        setEmailErrorMessage(null);
        setEmailInputValue(e.target.value);
      }
    } else if (key === 'password') {
      if (e.target.value.length < 8) {
        setPasswordErrorMessage('8~15자리 사이로 입력해야 합니다');
      } else {
        setPasswordErrorMessage(null);
        setPasswordInputValue(e.target.value);
      }
    } else if (key === 'petName') {
      if (e.target.value.length === 0) {
        setPetNameInputValue(null);
      }
      setPetNameInputValue(e.target.value);
    } else if (key === 'petBreed') {
      if (e.target.value.length === 0) {
        setPetBreedInputValue(null);
      }
      setPetBreedInputValue(e.target.value);
    } else if (key === 'city' && e.target.value !== undefined) {
      if (e.target.value === '서울') {
        setCity('서울');
      } else if (e.target.value === '인천') {
        setCity('인천');
      } else if (e.target.value === '대전') {
        setCity('대전');
      } else if (e.target.value === '대구') {
        setCity('대구');
      } else if (e.target.value === '울산') {
        setCity('울산');
      } else if (e.target.value === '부산') {
        setCity('부산');
      } else if (e.target.value === '광주') {
        setCity('광주');
      } else if (e.target.value === '경기도') {
        setCity('경기도');
      } else if (e.target.value === '강원도') {
        setCity('강원도');
      } else if (e.target.value === '충청남도') {
        setCity('충청남도');
      } else if (e.target.value === '충청북도') {
        setCity('충청북도');
      } else if (e.target.value === '전라남도') {
        setCity('전라남도');
      } else if (e.target.value === '전라북도') {
        setCity('전라북도');
      } else if (e.target.value === '경상남도') {
        setCity('경상남도');
      } else if (e.target.value === '경상북도') {
        setCity('경상북도');
      } else if (e.target.value === '제주도') {
        setCity('제주도');
      } else {
        setCity(null);
      }
    }
  };

  const handleOnClickSignUpBtn = async () => {
    try {
      setIsClickSignUpBtn(true);
      if (
        (petNameInputValue && !petBreedInputValue) ||
        (!petNameInputValue && petBreedInputValue)
      ) {
        setPetErrorMessage(
          '반려견 정보 입력 시 이름과 견종 모두 입력해야 합니다'
        );
      } else if (
        (petNameInputValue && petBreedInputValue) ||
        (!petNameInputValue && !petBreedInputValue)
      ) {
        setPetErrorMessage(null);
      }

      if (
        usernameErrorMessage === null &&
        emailErrorMessage === null &&
        passwordErrorMessage === null &&
        petNameInputValue !== null &&
        petBreedInputValue !== null &&
        city !== null
      ) {
        const signUp = await axios.post(
          'https://server.calming-signal.ml/signup',
          {
            name: usernameInputValue,
            email: emailInputValue,
            password: passwordInputValue,
            petName: petNameInputValue,
            petBreed: petBreedInputValue,
            city,
          },
          {
            withCredentials: true,
          }
        );
        if (signUp) {
          window.alert('회원가입이 완료 되었습니다.');
          history.push('/sign-in');
        }
      } else if (
        usernameErrorMessage === null &&
        emailErrorMessage === null &&
        passwordErrorMessage === null &&
        petNameInputValue.length === 0 &&
        petBreedInputValue.length === 0
      ) {
        const signUp = await axios.post(
          'https://server.calming-signal.ml/signup',
          {
            name: usernameInputValue,
            email: emailInputValue,
            password: passwordInputValue,
          },
          {
            withCredentials: true,
          }
        );
        if (signUp) {
          window.alert('회원가입이 완료 되었습니다.');
          history.push('/sign-in');
        }
      }
    } catch (err) {
      console.error(err);
      window.alert('이미 존재하는 아이디입니다.');
    }
  };

  return (
    <div className="sign_up_container">
      <NavContainer />
      <div className="sign_up_container_title">Sign up</div>
      <div className="sign_up_box_notice">*표시는 필수입력입니다.</div>
      <div className="sign_up_box">
        <div className="sign_up_box_name_sign">이름 *</div>
        <div className="sign_up_box_name">
          <input
            className="sign_up_box_input_name"
            placeholder="User name"
            onChange={handleInputValue('username')}
            autoFocus
            required
          ></input>
        </div>
        <div className="sign_up_box_name_error_message">
          {isClickSignUpnBtn ? usernameErrorMessage : null}
        </div>
        <div className="sign_up_box_id_sign">아이디 *</div>
        <div className="sign_up_box_id">
          <input
            className="sign_up_box_input_id"
            placeholder="Email"
            onChange={handleInputValue('email')}
            type="email"
          ></input>
        </div>
        <div className="sign_up_box_id_error_message">
          {isClickSignUpnBtn ? emailErrorMessage : null}
        </div>
        <div className="sign_up_box_password_sign">비밀번호 *</div>
        <div className="sign_up_box_password">
          <input
            className="sign_up_box_input_password"
            placeholder="Password"
            onChange={handleInputValue('password')}
            type="password"
          ></input>
        </div>
        <div className="sign_up_box_password_error_message">
          {isClickSignUpnBtn ? passwordErrorMessage : null}
        </div>
        <div className="sign_up_box_pet_name_sign">반려견 이름</div>
        <div className="sign_up_box_pet_name">
          <input
            className="sign_up_box_input_pet_name"
            placeholder="pet name"
            onChange={handleInputValue('petName')}
          ></input>
        </div>
        {/* 임시 띄어씌기 용 */}
        <div></div>
        <div className="sign_up_box_pet_breed_sign">견종</div>
        <div className="sign_up_box_pet_breed">
          <input
            className="sign_up_box_select_pet_breed"
            list="choices"
            placeholder="breed"
            onChange={handleInputValue('petBreed')}
          />
          <datalist id="choices">
            {/* 소형견 */}
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
        {/* 임시 띄어쓰기 */}
        <div></div>
        <div className="sign_up_box_location">지역</div>
        <div className="sign_up_box_location_input">
          <input
            className="sign_up_box_location_select_input"
            list="choice_location"
            placeholder="시, 도로 조회하세요"
            onChange={handleInputValue('city')}
          />
          <datalist id="choice_location">
            <option value="서울">서울</option>
            <option value="인천">인천</option>
            <option value="대전">대전</option>
            <option value="대구">대구</option>
            <option value="울산">울산</option>
            <option value="부산">부산</option>
            <option value="광주">광주</option>
            <option value="경기도">경기도</option>
            <option value="강원도">강원도</option>
            <option value="충청남도">충청남도</option>
            <option value="충청북도">충청북도</option>
            <option value="전라남도">전라남도</option>
            <option value="전라북도">전라북도</option>
            <option value="경상남도">경상남도</option>
            <option value="경상북도">경상북도</option>
            <option value="제주도">제주도</option>
          </datalist>
        </div>
        <div className="sign_up_box_pet_error_message">
          {isClickSignUpnBtn ? petErrorMessage : null}
        </div>
        {/* 회원가입 버튼 */}
        <div className="sign_up_box_create_btn_div">
          <button
            className="sign_up_box_create_btn"
            onClick={handleOnClickSignUpBtn}
          >
            회원가입
          </button>
        </div>
        <div className="sign_up_box_hr"></div>
        <div className="sign_up_box_already_have">
          <Link to="/sign-in">
            <div className="sign_up_box_already_have_text">
              이미 아이디가 있으신가요?
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
