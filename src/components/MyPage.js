import React from 'react';
import Nav from './Nav';
import './Mypage.css';
import NavContainer from '../container/NavContainer';

const MyPage = ({
  email,
  password,
  userName,
  isLoggedIn,
  setEmailValue,
  setPasswordValue,
  setUserNameValue,
  petName,
  petBreed,
  setPetNameValue,
  setPetBreedValue,
}) => {
  return isLoggedIn?(
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
          <div className="mypage_profile_PW_box_change">비밀번호 변경하기</div>
        </div>
        <div className="mypage_profile_name_box">
          <div className="mypage_profile_name_box_title">이름</div>
          <div className="mypage_profile_name_box_value">{userName}</div>
          <div className="mypage_profile_name_box_change">이름 변경하기</div>
        </div>
        {/* 반려견 이름 */}
        <div className="mypage_profile_pet_box">
          <div className="mypage_profile_pet_box_title">반려견 이름</div>
          <div className="mypage_profile_pet_box_value">{petName}</div>
          <div>반려견 이름 변경하기</div>
        </div>
        {/* 반려견종 */}
        <div>
          <div>반려견종</div>
          <div>{petBreed}</div>
          <div>반려견종 변경</div>
        </div>
      </div>
    </div>
  ):
  (
    <div>
      로그인 후 사용 가능합니다.
    </div>
  );
};

export default MyPage;
