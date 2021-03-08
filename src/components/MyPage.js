import React from 'react';
import Nav from './Nav';
import './MyPage.css';

const MyPage = () => {
  return (
    <div className="mypage_container">
      <Nav></Nav>
      <div className="mypage_profile_title">개인 정보</div>
      <div className="mypage_profile_box">
        <div className="mypage_profile_ID_box">
          <div className="mypage_profile_ID_box_title">ID</div>
          <div className="mypage_profile_ID_box_value">gildong</div>
        </div>
        <div className="mypage_profile_PW_box">
          <div className="mypage_profile_PW_box_title">비밀번호</div>
          <div className="mypage_profile_PW_box_value">비밀번호 암호화</div>
        </div>
        <div className="mypage_profile_name_box">
          <div className="mypage_profile_name_box_title">이름</div>
          <div className="mypage_profile_name_box_value">홍길동</div>
        </div>
        {/* <div className="mypage_profile_pet_box">
          <div className="mypage_profile_pet_box_title">반려견 이름</div>
          <div className="mypage_profile_pet_box_value">말티즈</div>
        </div> */}
      </div>
    </div>
  );
};

export default MyPage;
