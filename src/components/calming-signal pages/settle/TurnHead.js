import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import turn_head from '../../../img/turn_head.jpg';
import './TurnHead.css';

const TurnHead = () => {
  return (
    <div className="turn_head_container">
      <NavContainer />
      <Sidebar />
      <div className="turn_head_contents">
        <div className="turn_head_contents_left">
          <div className="turn_head_right_img_box">
            <img
              className="turn_head_right_img"
              src={turn_head}
              alt="turn_head"
            />
          </div>
        </div>
        <div className="turn_head_contents_right">
          <div className="turn_head_contents_right_title">고개 돌리기</div>
          <div className="turn_head_contents_right_first">
            고개를 돌리는 시그널에서도 꼬리를 함께 보아야 합니다.
          </div>
          <div className="turn_head_contents_right_second">
            꼬리를 흔들면서 고개를 돌리는 것은 기쁠 때 하는 시그널이며 자신의
            흥분을 낮추기 위함입니다.
          </div>
          <div className="turn_head_contents_right_third">
            그러나 꼬리를 흔들지 않고 고개를 돌리는 것은 곤란할 때 하는
            시그널입니다.
          </div>
          <div className="turn_head_contents_right_forth">
            별로 좋은 기분은 아니지만 강아지도 노력하고 있는 것이니 절대 꾸짖지
            않아야 합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnHead;
