import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import sigh from '../../../img/sigh.jpg';
import './Sigh.css';

const Sigh = () => {
  return (
    <div className="sigh_container">
      <NavContainer />
      <Sidebar />
      <div className="sigh_contents">
        <div className="sigh_contents_left">
          <div className="sigh_right_img_box">
            <img className="sigh_right_img" src={sigh} alt="sigh" />
          </div>
        </div>
        <div className="sigh_contents_right">
          <div className="sigh_contents_right_title">편안한 자세에서 한숨</div>
          <div className="sigh_contents_right_first">
            강아지는 떄론 편안한 자세에서 한숨을 쉬기도 합니다.
          </div>
          <div className="sigh_contents_right_second">
            이것은 사람으로 말한다면 직장에서 돌아와 소파에 <br></br>드러누웠을
            때 &ldquo;아 피곤 하아&rdquo; 라고 안도하면서 내뱉는 <br></br>
            한숨같은 것이라고 합니다.
          </div>
          <div className="sigh_contents_right_third">
            휴식모드의 강아지는 한숨을 쉴 때 대개 눈을 감고 있습니다.
          </div>
          <div className="sigh_contents_right_forth">
            또는 사람의 얼굴을 보지 않고 어딘가 멍한 눈으로 다른 <br></br>
            장소를 향하고 있습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sigh;
