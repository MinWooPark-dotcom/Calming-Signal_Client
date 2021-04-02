import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import Tail from '../../../img/roll_tail.jpeg';
import './RollTail.css'

const RollTail = () => {
    return (        
    <div className="roll_tail_container">
      <NavContainer />
      <Sidebar />
      <div className="roll_tail_contents">
        <div className="roll_tail_contents_left">
          <div className="roll_tail_right_img_box">
            <img className="roll_tail_right_img" src={Tail} alt='Tail' />
          </div>
        </div>
        <div className="roll_tail_contents_right">
          <div className="roll_tail_contents_right_title">몸 안으로 꼬리가 말림</div>
          <div className="roll_tail_contents_right_first">강아지가 갑자기 얼굴을 몸쪽으로 축 늘어트리고, 꼬리가 말려들어갔다면 공포, 무서움을 느끼고 있다는 의미입나다.</div>
          <div className="roll_tail_contents_right_second">반려견이 불안감을 느끼지 않도록 해당 상황에서 벗아나도록 도와주세요.</div>
          <div className="roll_tail_contents_right_third">최대한 안정감을 느낄 수 있도록 해 주는게 가장 중요합니다.</div>
        </div>
      </div>
    </div>
    );
};

export default RollTail;