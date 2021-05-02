import React from 'react';
import NavContainer from '../../../container/NavContainer';
import Sidebar from '../../Sidebar';
import yawn from '../../../img/yawn.jpg';
import './Yawn.css';

const Yawn = () => {
  return (
    <div className="yawn_container">
      <NavContainer />
      <Sidebar />
      <div className="yawn_contents">
        <div className="yawn_contents_left">
          <div className="yawn_right_img_box">
            <img className="yawn_right_img" src={yawn} alt="yawn" />
          </div>
        </div>
        <div className="yawn_contents_right">
          <div className="yawn_contents_right_title">하품하기</div>
          <div className="yawn_contents_right_first">
            강아지들이 하품을 하는 것은 정말 피곤할 때 또는 진정하라는 의미로
            나뉩니다.
          </div>
          <div className="yawn_contents_right_second">
            특히 보호자가 혼을 낼 때 반려견들이 하품을 하기도 하는데요,
          </div>
          <div className="yawn_contents_right_third">
            이는 보호자의 높아진 언성에 반려견이 긴장을 하여 보호자를 진정시키기
            위함입니다.
          </div>
          <div className="yawn_contents_right_forth">
            이런 시그널을 본다면 반려견이 놀랐다는 의미이니 잠시 숨을 돌리고
            차분한 마음을 가져보세요
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yawn;
