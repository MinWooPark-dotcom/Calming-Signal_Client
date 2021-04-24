import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from './Nav';
import './Mypage.css';
import NavContainer from '../container/NavContainer';
import axios from 'axios';

const MyPage = ({
  email,
  password,
  userName,
  isLoggedIn,
  handleLogIn,
  setEmailValue,
  setPasswordValue,
  setUserNameValue,
  petName,
  petBreed,
  setPetNameValue,
  setPetBreedValue,
  history,
}) => {
  useEffect(() => {}, [userName, petName, petBreed]);

  //!  공통
  const handleInputValue = (key) => (e) => {
    // prevPassword
    if (key === 'prevPassword') {
      if (e.target.value.length < 8) {
        setPrevPasswordErrorMessage('8~15자리 사이로 입력해야 합니다');
      } else {
        setPrevPasswordErrorMessage(null);
        setPrevPassword(e.target.value);
      }
    }
    // newPassword
    else if (key === 'newPassword') {
      if (e.target.value.length < 8) {
        setNewPasswordErrorMessage('8~15자리 사이로 입력해야 합니다');
      } else {
        setNewPasswordErrorMessage(null);
        setNewPassword(e.target.value);
      }
    }
    // confirm
    else if (key === 'newConfirmPassword') {
      setNewConfirmPassword(e.target.value);
    }
    // 이름
    else if (key === 'userName') {
      setNewName(e.target.value);
    }
    // 반려견 이름
    else if (key === 'petName') {
      if (e.target.value.length === 0) {
        setPetNameInputValue(null);
      }
      setPetNameInputValue(e.target.value);
    }
    // 반려견종
    else if (key === 'petBreed') {
      if (e.target.value.length === 0) {
        setPetBreedInputValue(null);
      }
      setPetBreedInputValue(e.target.value);
    }
  };

  //! 비밀번호 관련
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  const handleLogout = async () => {
    const logout = await axios.post('https://localhost:3002/logout', null, {
      withCredentials: true,
    });
    console.log('🚀 ~ file: Nav.js ~ line 15 ~ handleLogout ~ logout', logout);
    if (logout.data.message === 'Logout completed') {
      handleLogIn();
      setEmailValue(null);
      setUserNameValue(null);
      handleScroll();
      history.push('/');
    }
  };
  const [isClickedPasswordBtn, setIsClickedPasswordBtn] = useState(false);
  const [prevPassword, setPrevPassword] = useState(null);
  console.log('🚀 ~ file: Mypage.js ~ line 67 ~ prevPassword', prevPassword);
  const [newPassword, setNewPassword] = useState(null);
  console.log('🚀 ~ file: Mypage.js ~ line 69 ~ newPassword', newPassword);
  const [newConfirmPassword, setNewConfirmPassword] = useState(null);
  console.log(
    '🚀 ~ file: Mypage.js ~ line 71 ~ newConfirmPassword',
    newConfirmPassword
  );
  // error message
  const [prevPasswordErrorMessage, setPrevPasswordErrorMessage] = useState(
    null
  );
  const [newPasswordErrorMessage, setNewPasswordErrorMessage] = useState(null);
  const [
    newPasswordConfirmErrorMessage,
    setNewPasswordConfirmErrorMessage,
  ] = useState(null);

  const hadleOnClickPwBtn = () => {
    setIsClickedPasswordBtn(!isClickedPasswordBtn);
  };

  const handleChangePassword = async (e) => {
    try {
      if (newPassword === newConfirmPassword) {
        setNewPasswordConfirmErrorMessage(null);
        const changePassword = await axios.patch(
          'https://localhost:3002/mypage/password',
          {
            email,
            prevPassword,
            newPassword,
          },
          {
            withCredentials: true,
          }
        );
        console.log(
          '🚀 ~ file: Mypage.js ~ line 49 ~ handleChangePassword ~ changePassword',
          changePassword
        );
        if (changePassword.data.message === 'OK') {
          handleLogout();
        }
      } else if (newConfirmPassword.length < 8) {
        setNewPasswordConfirmErrorMessage('8~15자리 사이로 입력해야 합니다');
      } else if (newPassword !== newConfirmPassword) {
        setNewPasswordConfirmErrorMessage('비밀번호가 일치하지 않습니다.');
      }
    } catch (err) {
      alert('이전 비밀번호를 확인해 주세요');
    }
  };

  // ! 이름 변경 관련
  const [isClickedNameBtn, setIsClickedNameBtn] = useState(false);
  const [newName, setNewName] = useState(null);
  const handleOnClickNameBtn = () => {
    setIsClickedNameBtn(!isClickedNameBtn);
  };
  const handleChangeName = async () => {
    const changeName = await axios.patch(
      'https://localhost:3002/mypage/username',
      {
        newName,
      },
      {
        withCredentials: true,
      }
    );

    const userInfo = await axios('https://localhost:3002/userinfo', {
      withCredentials: true,
    });
    console.log(
      '🚀 ~ file: Mypage.js ~ line 163 ~ handleChangeName ~ userInfo',
      userInfo
    );
    setUserNameValue(userInfo.data.name);
    handleOnClickNameBtn();
  };

  // ! 반려견 이름 변경 관련
  const [isClickedPetNameBtn, setIsClickedPetNameBtn] = useState(false);
  // 반려견 이름 변경
  const handleOnClickPetNameBtn = () => {
    setIsClickedPetNameBtn(!isClickedPetNameBtn);
  };
  const [petNameInputValue, setPetNameInputValue] = useState('');
  const handleChangePetName = async () => {
    console.log('petNameInputValue>>>', petNameInputValue);
    const changePetName = await axios.patch(
      'https://localhost:3002/mypage/petname',
      { newPetName: petNameInputValue },
      { withCredentials: true }
    );

    if (changePetName.data.message === 'OK') {
      setPetNameValue(petNameInputValue);
      handleOnClickPetNameBtn();
    }
  };
  // 반려견 이름 등록
  const handleRegistePetName = async () => {
    console.log('petNameInputValue>>>', petNameInputValue);
    const changePetName = await axios.post(
      'https://localhost:3002/mypage/petname',
      { newPetName: petNameInputValue },
      { withCredentials: true }
    );

    if (changePetName.data.message === 'OK') {
      setPetNameValue(petNameInputValue);
      handleOnClickPetNameBtn();
    }
  };

  // ! 반려견 견종 변경
  const [petBreedInputValue, setPetBreedInputValue] = useState('');
  const [isClickedPetBreedBtn, setIsClickedPetBreedBtn] = useState(false);
  const handleOnClickPetBreedBtn = () => {
    setIsClickedPetBreedBtn(!isClickedPetBreedBtn);
  };
  const handleChangePetBreed = async () => {
    const changePetBreed = await axios.patch(
      'https://localhost:3002/mypage/petbreed',
      { newPetBreed: petBreedInputValue },
      { withCredentials: true }
    );

    if (changePetBreed.data.message === 'OK') {
      setPetBreedValue(petBreedInputValue);
      handleOnClickPetBreedBtn();
    }
  };

  return isLoggedIn ? (
    <div className="mypage_container">
      <NavContainer />
      <div className="mypage_profile_title">개인 정보</div>

      <div className="mypage_profile_box">
        <div className="mypage_profile_ID_box">
          <div className="mypage_profile_ID_box_title">ID</div>
          <div className="mypage_profile_ID_box_value">{email}</div>
        </div>
        <div className="mypage_profile_PW_box">
          <div className="mypage_profile_PW_box_title">비밀번호</div>
          <div className="mypage_profile_PW_box_value">비밀번호 암호화</div>
          <div
            className="mypage_profile_PW_box_change"
            onClick={hadleOnClickPwBtn}
          >
            비밀번호 변경
          </div>
        </div>
        <div className="mypage_profile_name_box">
          <div className="mypage_profile_name_box_title">이름</div>
          <div className="mypage_profile_name_box_value">{userName}</div>
          <div
            className="mypage_profile_name_box_change"
            onClick={handleOnClickNameBtn}
          >
            이름 변경
          </div>
        </div>
        {/* 반려견 이름 */}
        <div className="mypage_profile_pet_name_box">
          <div className="mypage_profile_pet_name_title">반려견 이름</div>
          {petName ? (
            <div className="mypage_profile_pet_name_value">{petName}</div>
          ) : (
            <div className="mypage_profile_pet_name_value">
              반려견 정보를 등록해 주세요
            </div>
          )}
          {petName ? (
            <div
              className="mypage_profile_pet_name_change"
              onClick={handleOnClickPetNameBtn}
            >
              반려견 이름 변경
            </div>
          ) : (
            <div
              className="mypage_profile_pet_name_change"
              onClick={handleOnClickPetNameBtn}
            >
              반려견 이름 등록
            </div>
          )}
        </div>
        {/* 반려견종 */}
        <div className="mypage_profile_pet_breed_box">
          <div className="mypage_profile_pet_breed_title">반려견종</div>
          {petBreed ? (
            <div className="mypage_profile_pet_breed_value">{petBreed}</div>
          ) : (
            <div className="mypage_profile_pet_breed_value">
              반려견 정보를 등록해 주세요
            </div>
          )}

          {petBreed ? (
            <div
              className="mypage_profile_pet_breed_change"
              onClick={handleOnClickPetBreedBtn}
            >
              반려견종 변경
            </div>
          ) : (
            <div
              className="mypage_profile_pet_breed_change"
              onClick={handleOnClickPetBreedBtn}
            >
              반려견종 등록
            </div>
          )}
        </div>
      </div>
      {/*//! 변경 모달 */}
      {/* 비밀번호 */}
      {isClickedPasswordBtn ? (
        <div className="mypage_profile_modal_password">
          {/* prev */}
          <div className="mypage_profile_modal_password_prev">
            이전 비밀번호
          </div>
          <input
            className="mypage_profile_modal_password_prev_input"
            onChange={handleInputValue('prevPassword')}
          ></input>
          {/* {prevPasswordErrorMessage} */}
          {/* new */}
          <div className="mypage_profile_modal_password_new">
            변경할 비밀번호
          </div>
          <input
            className="mypage_profile_modal_password_new"
            onChange={handleInputValue('newPassword')}
          ></input>
          {newPasswordErrorMessage}
          {/* confirm */}
          <div className="mypage_profile_modal_password_confirm">
            변경할 비밀번호 확인
          </div>
          <input
            className="mypage_profile_modal_password_confirm"
            onChange={handleInputValue('newConfirmPassword')}
          ></input>
          <button
            className="mypage_profile_modal_password_btn"
            onClick={handleChangePassword}
          >
            비밀번호 변경
          </button>
          {newPasswordConfirmErrorMessage}
        </div>
      ) : null}
      {/* 이름 */}
      {isClickedNameBtn ? (
        <div className="mypage_profile_modal_name">
          <div className="mypage_profile_modal_name_now_box">
            <div className="mypage_profile_modal_name_title">현재 이름</div>
            <div className="mypage_profile_modal_name_value">{userName}</div>
          </div>
          <div className="mypage_profile_modal_new_name_box">
            <div className="mypage_profile_modal_new_name">변경할 이름</div>
            <input
              className="mypage_profile_modal_new_name_input"
              onChange={handleInputValue('userName')}
            ></input>
            <button
              className="mypage_profile_modal_btn"
              onClick={handleChangeName}
            >
              이름 변경
            </button>
          </div>
        </div>
      ) : null}
      {/* //! 반려견 이름 */}
      {isClickedPetNameBtn ? (
        <div className="mypage_profile_modal_petname">
          {petName ? (
            <div className="mypage_profile_modal_petname_now_box">
              <div className="mypage_profile_modal_petname_title">
                현재 반려견 이름
              </div>
              <div className="mypage_profile_modal_petname_value">
                {petName}
              </div>
            </div>
          ) : null}
          {petName ? (
            <div className="mypage_profile_modal_petname_new_box">
              <div className="mypage_profile_modal_petname_new">
                변경할 반려견 이름
                <input
                  className="mypage_profile_modal_petname_new_input"
                  onChange={handleInputValue('petName')}
                ></input>
              </div>
              <button
                className="mypage_profile_modal_petname_btn"
                onClick={handleChangePetName}
              >
                이름 변경
              </button>
            </div>
          ) : (
            <div className="mypage_profile_modal_petname_new_box">
              <div className="mypage_profile_modal_petname_new">
                등록할 반려견 이름
                <input
                  className="mypage_profile_modal_petname_new_input"
                  onChange={handleInputValue('petName')}
                ></input>
              </div>
              <button
                className="mypage_profile_modal_petname_btn"
                onClick={handleRegistePetName}
              >
                이름 등록
              </button>
            </div>
          )}
        </div>
      ) : null}
      {/* //! 반려견종 */}
      {isClickedPetBreedBtn ? (
        <div className="mypage_profile_modal_pet_breed">
          {petBreed ? (
            <div className="mypage_profile_modal_pet_breed_now_box">
              <div className="mypage_profile_modal_pet_breed_title">
                현재 반려견종
              </div>
              <div className="mypage_profile_modal_pet_breed_value">
                {petBreed}
              </div>
            </div>
          ) : null}
          {petBreed ? (
            <div className="mypage_profile_modal_pet_breed_new_box">
              <div className="mypage_profile_modal_pet_breed_new">
                변경할 반려견종
                <input
                  className="mypage_profile_modal_pet_breed_new_input"
                  list="choices"
                  placeholder="breed"
                  onChange={handleInputValue('petBreed')}
                />
                <datalist id="choices">
                  <option value="말티즈">말티즈</option>
                  <option value="요크셔테리어">요크셔테리어</option>
                  <option value="푸들">푸들</option>
                  <option value="포메라니안">포메라니안</option>
                  <option value="치와와">치와와</option>
                  <option value="닥스훈트">닥스훈트</option>
                  <option value="시츄">시츄</option>

                  <option value="슈나우저">슈나우저</option>
                  <option value="웰시코기">웰시코기</option>
                  <option value="비글">비글</option>
                  <option value="보더콜리">보더콜리</option>

                  <option value="진돗개">진돗개</option>
                  <option value="시베리안 허스키">시베리안 허스키</option>
                  <option value="리트리버">리트리버</option>
                  <option value="셰퍼드">셰퍼드</option>
                  <option value="말라뮤트">말라뮤트</option>
                  <option value="그레이 하운드">그레이 하운드</option>
                </datalist>
              </div>
              <button
                className="mypage_profile_modal_pet_breed_btn"
                onClick={handleChangePetBreed}
              >
                견종 변경
              </button>
            </div>
          ) : (
            <div className="mypage_profile_modal_pet_breed_new_box">
              <div className="mypage_profile_modal_pet_breed_new">
                등록할 반려견종
                <input
                  className="mypage_profile_modal_pet_breed_new_input"
                  list="choices"
                  placeholder="breed"
                  onChange={handleInputValue('petBreed')}
                />
                <datalist id="choices">
                  <option value="말티즈">말티즈</option>
                  <option value="요크셔테리어">요크셔테리어</option>
                  <option value="푸들">푸들</option>
                  <option value="포메라니안">포메라니안</option>
                  <option value="치와와">치와와</option>
                  <option value="닥스훈트">닥스훈트</option>
                  <option value="시츄">시츄</option>

                  <option value="슈나우저">슈나우저</option>
                  <option value="웰시코기">웰시코기</option>
                  <option value="비글">비글</option>
                  <option value="보더콜리">보더콜리</option>

                  <option value="진돗개">진돗개</option>
                  <option value="시베리안 허스키">시베리안 허스키</option>
                  <option value="리트리버">리트리버</option>
                  <option value="셰퍼드">셰퍼드</option>
                  <option value="말라뮤트">말라뮤트</option>
                  <option value="그레이 하운드">그레이 하운드</option>
                </datalist>
              </div>
              <button
                className="mypage_profile_modal_pet_breed_btn"
                onClick={handleChangePetBreed}
              >
                견종 등록
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  ) : (
    <div>로그인 후 사용 가능합니다.</div>
  );
};

export default withRouter(MyPage);
