import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import wag_gif from '../../../img/wag.gif'
import './Wag.css'

const Wag = () => {
    return (        
    <div className="wag_container">
      <NavContainer />
      <Sidebar />
      <div className="wag_contents">
        <div className="wag_contents_left">
          <div className="wag_right_img_box">
            <img className="wag_right_img" src={wag_gif} alt="dog" />
          </div>
        </div>
        <div className="wag_contents_right">
          <div className="wag_contents_right_title">꼬리 흔들기</div>
          <div className="wag_contents_right_first">개들이 행복한 감정을 표현하는 대표적인 카밍 시그널 중 하나입니다.</div>
          <div className="wag_contents_right_second">그러나 꼬리를 흔드는 시그널이 모두 행복한 감정을 표현하진 않습니다.</div>
          <div className="wag_contents_right_third">비슷해보이지만 꼬리의 높이와 흔드는 폭에 따라서 경고와 위협의 시그널이 되기도 합니다.</div>
          <div className="wag_contents_right_forth">반가움과 위협을 구분하지 못하고 개에게 손을 뻗을 경우 위험한 일이 발생할 수 있기에 꼬리 흔들기 시그널에 자세히 알아보는 것이 좋습니다.</div>
          <div className="wag_contents_right_fifth">꼬리가 세워지거나 아래로 쳐지지 않은 사앹로 큰 폭으로 움직인다면 친근감을 표현하는 것입니다.</div>
        </div>
      </div>
    </div>
    );
};

export default Wag;