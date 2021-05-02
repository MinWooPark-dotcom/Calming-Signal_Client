import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavContainer from '../container/NavContainer';
import Footer from './Footer';
import './Landing.css';
import landing_logo from '../img/landing_logo.png';
import landing_logo2 from '../img/landing_logo2.png';
import happy from '../img/happy.png';
import comfortable from '../img/comfortable.png';
import nervous from '../img/nervous.png';
import settle from '../img/settle.png';
import landing_page_calming_signal from '../img/landing_page.jpeg';

const Landing = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="landing_page">
      <NavContainer />
      {/*//! 1칸 */}
      <div className="landing_contents1">
        <div>
          <div className="landing_contents1_title">카밍 시그널</div>
          <div className="landing_contents1_div_img">
            <img
              className="landing_contents1_img"
              src={landing_page_calming_signal}
            />
          </div>
        </div>
        <div className="landing_contents1_body_1">
          카밍 시그널이란 반려견의 몸짓 언어를 뜻합니다.
        </div>
        <div className="landing_contents1_body_2">
          세상에서 가장 아름다운 반려견의 몸짓 언어를 이해하고 소통해 보세요.
        </div>
        <Link to="/calming-signal">
          <div className="landing_contents1_div_btn" onClick={handleScroll}>
            카밍 시그널 알아보기
          </div>
        </Link>
      </div>
      {/*//! 2칸 */}
      <div className="landing_contents2">
        {/* happy */}
        <div className="landing_contents2_happy_container">
          <div className="landing_contents2_happy_text_box">
            <div className="landing_contents2_happy_text_1">행복</div>
            <div className="landing_contents2_happy_text_2">
              반려견은 보호자와 함께 있을 때 가장 큰 행복합니다.
            </div>
            <div className="landing_contents2_happy_text_3">
              함께 있는 동안 반려견의 행복 시그널을 이해하고<br></br>더 큰
              행복을 나눠보세요.
            </div>
          </div>
          <div className="landing_contents2_happy_div_img">
            <img className="landing_contents2_happy_img" src={happy} />
          </div>
        </div>
        {/* comfortable */}
        <div className="landing_contents2_comfortable_container">
          <div className="landing_contents2_comfortable_text_box">
            <div className="landing_contents2_comfortable_text_1">편안함</div>
            <div className="landing_contents2_comfortable_text_2">
              반려견 또한 많은 감정을 느낍니다.
            </div>
            <div className="landing_contents2_comfortable_text_3">
              일상 속에서 편안함을 느끼고 있는지 관찰하고<br></br>
              안정감을 느낄 수 있도록 도와주세요.
            </div>
          </div>
          <div className="landing_contents2_comfortable_div_img">
            <img
              className="landing_contents2_comfortable_img"
              src={comfortable}
            />
          </div>
        </div>
        {/* nervous */}
        <div className="landing_contents2_nervous_container">
          <div className="landing_contents2_nervous_text_box">
            <div className="landing_contents2_nervous_text_1">긴장</div>
            <div className="landing_contents2_nervous_text_2">
              사람과 마찬가지로 낯선 환경에선 반려견도 <br></br> 긴장하곤
              합니다.
            </div>
            <div className="landing_contents2_nervous_text_3">
              긴장했다는 시그널을 알아차리고 반려견의 <br></br> 마음을 헤아려
              주세요.
            </div>
          </div>
          <div className="landing_contents2_nervous_div_img">
            <img className="landing_contents2_nervous_img" src={nervous} />
          </div>
        </div>
        {/* settle */}
        <div className="landing_contents2_settle_container">
          <div className="landing_contents2_settle_text_box">
            <div className="landing_contents2_settle_text_1">진정</div>
            <div className="landing_contents2_settle_text_2">
              보호자가 반려견을 진정시키는 것처럼, <br></br> 반려견도 보호자
              또는 친구들을 진정시키기도 합니다.
            </div>
            <div className="landing_contents2_settle_text_3">
              반려견이 진정시키는 시그널을 알아차리고 <br></br>그 상황에서
              벗어날 수 있도록 도와주세요.
            </div>
          </div>
          <div className="landing_contents2_settle_div_img">
            <img className="landing_contents2_settle_img" src={settle} />
          </div>
        </div>
      </div>
      {/* 3번째  */}
      <div className="landing_contents3">
        <Link to="/calming-signal">
          <div className="landing_contents3_btn" onClick={handleScroll}>
            카밍 시그널 알아보기
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
